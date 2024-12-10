import { useState } from 'react';
import './TicketSystem.css';

function TicketSystem() {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    description: '',
    priority: 'medium',
    rightType: '',
    additionalOrgs: []
  });
  const [file, setFile] = useState(null);

  const rightTypes = [
    'Access to Healthcare',
    'Patient Privacy',
    'Treatment Choice',
    'Emergency Care',
    'Medical Records',
    'Insurance Coverage',
    'Second Opinion',
    'Complaint Resolution'
  ];

  const organizations = [
    'Healthcare Authority',
    'Patient Rights Association',
    'Medical Insurance Board',
    'Healthcare Advocacy Group',
    'Community Health NGO',
    'Medical Ethics Committee',
    'Patient Support Network'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData, file);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleOrgChange = (org) => {
    setFormData(prev => ({
      ...prev,
      additionalOrgs: prev.additionalOrgs.includes(org)
        ? prev.additionalOrgs.filter(item => item !== org)
        : [...prev.additionalOrgs, org]
    }));
  };

  return (
    <div className="ticket-system">
      <h1>Submit Support Ticket</h1>
      <form onSubmit={handleSubmit} className="ticket-form">
        <div className="form-group">
          <label htmlFor="rightType">Type of Medical Right</label>
          <select
            id="rightType"
            name="rightType"
            value={formData.rightType}
            onChange={handleInputChange}
            required
          >
            <option value="">Select a right type</option>
            {rightTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="priority">Priority Level</label>
          <select
            id="priority"
            name="priority"
            value={formData.priority}
            onChange={handleInputChange}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
            <option value="urgent">Urgent</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Contact Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description of the Issue</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
            rows="4"
          />
        </div>

        <div className="form-group">
          <label htmlFor="file">Attach File or Image</label>
          <input
            type="file"
            id="file"
            onChange={handleFileChange}
            accept="image/*,.pdf,.doc,.docx"
          />
        </div>

        <div className="form-group">
          <label>Additional Organizations (Optional)</label>
          <div className="org-checkboxes">
            {organizations.map(org => (
              <label key={org} className="org-checkbox">
                <input
                  type="checkbox"
                  checked={formData.additionalOrgs.includes(org)}
                  onChange={() => handleOrgChange(org)}
                />
                {org}
              </label>
            ))}
          </div>
        </div>

        <button type="submit" className="submit-button">Submit Ticket</button>
      </form>
    </div>
  );
}

export default TicketSystem;