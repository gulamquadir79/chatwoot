export const useInstallationName = (str, installationName) => {
  if (str && installationName) {
    return str.replace(/ZedCapital/g, installationName);
  }
  return str;
};

export default {
  methods: {
    useInstallationName,
  },
};
