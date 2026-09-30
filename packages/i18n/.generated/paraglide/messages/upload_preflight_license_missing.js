/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Preflight_License_MissingInputs */

const en_upload_preflight_license_missing = /** @type {(inputs: Upload_Preflight_License_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No licence chosen.`)
};

const es_upload_preflight_license_missing = /** @type {(inputs: Upload_Preflight_License_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sin licencia elegida.`)
};

const de_upload_preflight_license_missing = /** @type {(inputs: Upload_Preflight_License_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keine Lizenz gewählt.`)
};

const fr_upload_preflight_license_missing = /** @type {(inputs: Upload_Preflight_License_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucune licence choisie.`)
};

const it_upload_preflight_license_missing = /** @type {(inputs: Upload_Preflight_License_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessuna licenza scelta.`)
};

const nl_upload_preflight_license_missing = /** @type {(inputs: Upload_Preflight_License_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen licentie gekozen.`)
};

const pl_upload_preflight_license_missing = /** @type {(inputs: Upload_Preflight_License_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie wybrano licencji.`)
};

const pt_upload_preflight_license_missing = /** @type {(inputs: Upload_Preflight_License_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhuma licença escolhida.`)
};

const ru_upload_preflight_license_missing = /** @type {(inputs: Upload_Preflight_License_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Лицензия не выбрана.`)
};

const sv_upload_preflight_license_missing = /** @type {(inputs: Upload_Preflight_License_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ingen licens vald.`)
};

const tr_upload_preflight_license_missing = /** @type {(inputs: Upload_Preflight_License_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lisans seçilmedi.`)
};

const zh_upload_preflight_license_missing = /** @type {(inputs: Upload_Preflight_License_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未选择许可。`)
};

const ja_upload_preflight_license_missing = /** @type {(inputs: Upload_Preflight_License_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ライセンスが未選択です。`)
};

/**
* | output |
* | --- |
* | "No licence chosen." |
*
* @param {Upload_Preflight_License_MissingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_preflight_license_missing = /** @type {((inputs?: Upload_Preflight_License_MissingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Preflight_License_MissingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_preflight_license_missing(inputs)
	if (locale === "de") return de_upload_preflight_license_missing(inputs)
	if (locale === "fr") return fr_upload_preflight_license_missing(inputs)
	if (locale === "it") return it_upload_preflight_license_missing(inputs)
	if (locale === "nl") return nl_upload_preflight_license_missing(inputs)
	if (locale === "pl") return pl_upload_preflight_license_missing(inputs)
	if (locale === "pt") return pt_upload_preflight_license_missing(inputs)
	if (locale === "ru") return ru_upload_preflight_license_missing(inputs)
	if (locale === "sv") return sv_upload_preflight_license_missing(inputs)
	if (locale === "tr") return tr_upload_preflight_license_missing(inputs)
	if (locale === "zh") return zh_upload_preflight_license_missing(inputs)
	if (locale === "ja") return ja_upload_preflight_license_missing(inputs)
	return en_upload_preflight_license_missing(inputs)
});
