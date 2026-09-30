/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Quality_LicenseInputs */

const en_upload_quality_license = /** @type {(inputs: Upload_Quality_LicenseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Licence`)
};

const es_upload_quality_license = /** @type {(inputs: Upload_Quality_LicenseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Licencia`)
};

const de_upload_quality_license = /** @type {(inputs: Upload_Quality_LicenseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lizenz`)
};

const fr_upload_quality_license = /** @type {(inputs: Upload_Quality_LicenseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Licence`)
};

const it_upload_quality_license = /** @type {(inputs: Upload_Quality_LicenseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Licenza`)
};

const nl_upload_quality_license = /** @type {(inputs: Upload_Quality_LicenseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Licentie`)
};

const pl_upload_quality_license = /** @type {(inputs: Upload_Quality_LicenseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Licencja`)
};

const pt_upload_quality_license = /** @type {(inputs: Upload_Quality_LicenseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Licença`)
};

const ru_upload_quality_license = /** @type {(inputs: Upload_Quality_LicenseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Лицензия`)
};

const sv_upload_quality_license = /** @type {(inputs: Upload_Quality_LicenseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Licens`)
};

const tr_upload_quality_license = /** @type {(inputs: Upload_Quality_LicenseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lisans`)
};

const zh_upload_quality_license = /** @type {(inputs: Upload_Quality_LicenseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`许可`)
};

const ja_upload_quality_license = /** @type {(inputs: Upload_Quality_LicenseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ライセンス`)
};

/**
* | output |
* | --- |
* | "Licence" |
*
* @param {Upload_Quality_LicenseInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_quality_license = /** @type {((inputs?: Upload_Quality_LicenseInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Quality_LicenseInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_quality_license(inputs)
	if (locale === "de") return de_upload_quality_license(inputs)
	if (locale === "fr") return fr_upload_quality_license(inputs)
	if (locale === "it") return it_upload_quality_license(inputs)
	if (locale === "nl") return nl_upload_quality_license(inputs)
	if (locale === "pl") return pl_upload_quality_license(inputs)
	if (locale === "pt") return pt_upload_quality_license(inputs)
	if (locale === "ru") return ru_upload_quality_license(inputs)
	if (locale === "sv") return sv_upload_quality_license(inputs)
	if (locale === "tr") return tr_upload_quality_license(inputs)
	if (locale === "zh") return zh_upload_quality_license(inputs)
	if (locale === "ja") return ja_upload_quality_license(inputs)
	return en_upload_quality_license(inputs)
});
