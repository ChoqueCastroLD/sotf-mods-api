/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Fact_LicenseInputs */

const en_mod_fact_license = /** @type {(inputs: Mod_Fact_LicenseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`License`)
};

const es_mod_fact_license = /** @type {(inputs: Mod_Fact_LicenseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Licencia`)
};

const de_mod_fact_license = /** @type {(inputs: Mod_Fact_LicenseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lizenz`)
};

const fr_mod_fact_license = /** @type {(inputs: Mod_Fact_LicenseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Licence`)
};

const it_mod_fact_license = /** @type {(inputs: Mod_Fact_LicenseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Licenza`)
};

const nl_mod_fact_license = /** @type {(inputs: Mod_Fact_LicenseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Licentie`)
};

const pl_mod_fact_license = /** @type {(inputs: Mod_Fact_LicenseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Licencja`)
};

const pt_mod_fact_license = /** @type {(inputs: Mod_Fact_LicenseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Licença`)
};

const ru_mod_fact_license = /** @type {(inputs: Mod_Fact_LicenseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Лицензия`)
};

const sv_mod_fact_license = /** @type {(inputs: Mod_Fact_LicenseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Licens`)
};

const tr_mod_fact_license = /** @type {(inputs: Mod_Fact_LicenseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lisans`)
};

const zh_mod_fact_license = /** @type {(inputs: Mod_Fact_LicenseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`许可证`)
};

const ja_mod_fact_license = /** @type {(inputs: Mod_Fact_LicenseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ライセンス`)
};

/**
* | output |
* | --- |
* | "License" |
*
* @param {Mod_Fact_LicenseInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_fact_license = /** @type {((inputs?: Mod_Fact_LicenseInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Fact_LicenseInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_fact_license(inputs)
	if (locale === "de") return de_mod_fact_license(inputs)
	if (locale === "fr") return fr_mod_fact_license(inputs)
	if (locale === "it") return it_mod_fact_license(inputs)
	if (locale === "nl") return nl_mod_fact_license(inputs)
	if (locale === "pl") return pl_mod_fact_license(inputs)
	if (locale === "pt") return pt_mod_fact_license(inputs)
	if (locale === "ru") return ru_mod_fact_license(inputs)
	if (locale === "sv") return sv_mod_fact_license(inputs)
	if (locale === "tr") return tr_mod_fact_license(inputs)
	if (locale === "zh") return zh_mod_fact_license(inputs)
	if (locale === "ja") return ja_mod_fact_license(inputs)
	return en_mod_fact_license(inputs)
});
