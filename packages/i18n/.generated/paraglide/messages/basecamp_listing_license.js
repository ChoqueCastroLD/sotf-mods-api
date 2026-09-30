/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Listing_LicenseInputs */

const en_basecamp_listing_license = /** @type {(inputs: Basecamp_Listing_LicenseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Licence`)
};

const es_basecamp_listing_license = /** @type {(inputs: Basecamp_Listing_LicenseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Licencia`)
};

const de_basecamp_listing_license = /** @type {(inputs: Basecamp_Listing_LicenseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lizenz`)
};

const fr_basecamp_listing_license = /** @type {(inputs: Basecamp_Listing_LicenseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Licence`)
};

const it_basecamp_listing_license = /** @type {(inputs: Basecamp_Listing_LicenseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Licenza`)
};

const nl_basecamp_listing_license = /** @type {(inputs: Basecamp_Listing_LicenseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Licentie`)
};

const pl_basecamp_listing_license = /** @type {(inputs: Basecamp_Listing_LicenseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Licencja`)
};

const pt_basecamp_listing_license = /** @type {(inputs: Basecamp_Listing_LicenseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Licença`)
};

const ru_basecamp_listing_license = /** @type {(inputs: Basecamp_Listing_LicenseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Лицензия`)
};

const sv_basecamp_listing_license = /** @type {(inputs: Basecamp_Listing_LicenseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Licens`)
};

const tr_basecamp_listing_license = /** @type {(inputs: Basecamp_Listing_LicenseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lisans`)
};

const zh_basecamp_listing_license = /** @type {(inputs: Basecamp_Listing_LicenseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`许可证`)
};

const ja_basecamp_listing_license = /** @type {(inputs: Basecamp_Listing_LicenseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ライセンス`)
};

/**
* | output |
* | --- |
* | "Licence" |
*
* @param {Basecamp_Listing_LicenseInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_listing_license = /** @type {((inputs?: Basecamp_Listing_LicenseInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Listing_LicenseInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_listing_license(inputs)
	if (locale === "de") return de_basecamp_listing_license(inputs)
	if (locale === "fr") return fr_basecamp_listing_license(inputs)
	if (locale === "it") return it_basecamp_listing_license(inputs)
	if (locale === "nl") return nl_basecamp_listing_license(inputs)
	if (locale === "pl") return pl_basecamp_listing_license(inputs)
	if (locale === "pt") return pt_basecamp_listing_license(inputs)
	if (locale === "ru") return ru_basecamp_listing_license(inputs)
	if (locale === "sv") return sv_basecamp_listing_license(inputs)
	if (locale === "tr") return tr_basecamp_listing_license(inputs)
	if (locale === "zh") return zh_basecamp_listing_license(inputs)
	if (locale === "ja") return ja_basecamp_listing_license(inputs)
	return en_basecamp_listing_license(inputs)
});
