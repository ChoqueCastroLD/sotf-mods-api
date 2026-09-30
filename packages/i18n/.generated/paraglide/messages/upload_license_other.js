/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_License_OtherInputs */

const en_upload_license_other = /** @type {(inputs: Upload_License_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Other (explained in the description)`)
};

const es_upload_license_other = /** @type {(inputs: Upload_License_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otra (explicada en la descripción)`)
};

const de_upload_license_other = /** @type {(inputs: Upload_License_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Andere (in der Beschreibung erklärt)`)
};

const fr_upload_license_other = /** @type {(inputs: Upload_License_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Autre (expliquée dans la description)`)
};

const it_upload_license_other = /** @type {(inputs: Upload_License_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Altra (spiegata nella descrizione)`)
};

const nl_upload_license_other = /** @type {(inputs: Upload_License_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anders (uitgelegd in de beschrijving)`)
};

const pl_upload_license_other = /** @type {(inputs: Upload_License_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inna (wyjaśniona w opisie)`)
};

const pt_upload_license_other = /** @type {(inputs: Upload_License_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Outra (explicada na descrição)`)
};

const ru_upload_license_other = /** @type {(inputs: Upload_License_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Другая (пояснение в описании)`)
};

const sv_upload_license_other = /** @type {(inputs: Upload_License_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annan (förklaras i beskrivningen)`)
};

const tr_upload_license_other = /** @type {(inputs: Upload_License_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diğer (açıklamada anlatılır)`)
};

const zh_upload_license_other = /** @type {(inputs: Upload_License_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`其他（在描述中说明）`)
};

const ja_upload_license_other = /** @type {(inputs: Upload_License_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`その他（説明文に記載）`)
};

/**
* | output |
* | --- |
* | "Other (explained in the description)" |
*
* @param {Upload_License_OtherInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_license_other = /** @type {((inputs?: Upload_License_OtherInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_License_OtherInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_license_other(inputs)
	if (locale === "de") return de_upload_license_other(inputs)
	if (locale === "fr") return fr_upload_license_other(inputs)
	if (locale === "it") return it_upload_license_other(inputs)
	if (locale === "nl") return nl_upload_license_other(inputs)
	if (locale === "pl") return pl_upload_license_other(inputs)
	if (locale === "pt") return pt_upload_license_other(inputs)
	if (locale === "ru") return ru_upload_license_other(inputs)
	if (locale === "sv") return sv_upload_license_other(inputs)
	if (locale === "tr") return tr_upload_license_other(inputs)
	if (locale === "zh") return zh_upload_license_other(inputs)
	if (locale === "ja") return ja_upload_license_other(inputs)
	return en_upload_license_other(inputs)
});
