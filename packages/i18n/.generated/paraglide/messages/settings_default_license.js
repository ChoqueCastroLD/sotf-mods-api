/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Default_LicenseInputs */

const en_settings_default_license = /** @type {(inputs: Settings_Default_LicenseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Default license`)
};

const es_settings_default_license = /** @type {(inputs: Settings_Default_LicenseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Licencia por defecto`)
};

const de_settings_default_license = /** @type {(inputs: Settings_Default_LicenseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Standardlizenz`)
};

const fr_settings_default_license = /** @type {(inputs: Settings_Default_LicenseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Licence par défaut`)
};

const it_settings_default_license = /** @type {(inputs: Settings_Default_LicenseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Licenza predefinita`)
};

const nl_settings_default_license = /** @type {(inputs: Settings_Default_LicenseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Standaardlicentie`)
};

const pl_settings_default_license = /** @type {(inputs: Settings_Default_LicenseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Domyślna licencja`)
};

const pt_settings_default_license = /** @type {(inputs: Settings_Default_LicenseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Licença padrão`)
};

const ru_settings_default_license = /** @type {(inputs: Settings_Default_LicenseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Лицензия по умолчанию`)
};

const sv_settings_default_license = /** @type {(inputs: Settings_Default_LicenseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Standardlicens`)
};

const tr_settings_default_license = /** @type {(inputs: Settings_Default_LicenseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Varsayılan lisans`)
};

const zh_settings_default_license = /** @type {(inputs: Settings_Default_LicenseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`默认许可`)
};

const ja_settings_default_license = /** @type {(inputs: Settings_Default_LicenseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`既定のライセンス`)
};

/**
* | output |
* | --- |
* | "Default license" |
*
* @param {Settings_Default_LicenseInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_default_license = /** @type {((inputs?: Settings_Default_LicenseInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Default_LicenseInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_default_license(inputs)
	if (locale === "de") return de_settings_default_license(inputs)
	if (locale === "fr") return fr_settings_default_license(inputs)
	if (locale === "it") return it_settings_default_license(inputs)
	if (locale === "nl") return nl_settings_default_license(inputs)
	if (locale === "pl") return pl_settings_default_license(inputs)
	if (locale === "pt") return pt_settings_default_license(inputs)
	if (locale === "ru") return ru_settings_default_license(inputs)
	if (locale === "sv") return sv_settings_default_license(inputs)
	if (locale === "tr") return tr_settings_default_license(inputs)
	if (locale === "zh") return zh_settings_default_license(inputs)
	if (locale === "ja") return ja_settings_default_license(inputs)
	return en_settings_default_license(inputs)
});
