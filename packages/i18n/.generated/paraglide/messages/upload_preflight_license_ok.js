/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Preflight_License_OkInputs */

const en_upload_preflight_license_ok = /** @type {(inputs: Upload_Preflight_License_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Licence chosen.`)
};

const es_upload_preflight_license_ok = /** @type {(inputs: Upload_Preflight_License_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Licencia elegida.`)
};

const de_upload_preflight_license_ok = /** @type {(inputs: Upload_Preflight_License_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lizenz gewählt.`)
};

const fr_upload_preflight_license_ok = /** @type {(inputs: Upload_Preflight_License_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Licence choisie.`)
};

const it_upload_preflight_license_ok = /** @type {(inputs: Upload_Preflight_License_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Licenza scelta.`)
};

const nl_upload_preflight_license_ok = /** @type {(inputs: Upload_Preflight_License_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Licentie gekozen.`)
};

const pl_upload_preflight_license_ok = /** @type {(inputs: Upload_Preflight_License_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Licencja wybrana.`)
};

const pt_upload_preflight_license_ok = /** @type {(inputs: Upload_Preflight_License_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Licença escolhida.`)
};

const ru_upload_preflight_license_ok = /** @type {(inputs: Upload_Preflight_License_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Лицензия выбрана.`)
};

const sv_upload_preflight_license_ok = /** @type {(inputs: Upload_Preflight_License_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Licens vald.`)
};

const tr_upload_preflight_license_ok = /** @type {(inputs: Upload_Preflight_License_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lisans seçildi.`)
};

const zh_upload_preflight_license_ok = /** @type {(inputs: Upload_Preflight_License_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已选择许可。`)
};

const ja_upload_preflight_license_ok = /** @type {(inputs: Upload_Preflight_License_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ライセンスを選択済み。`)
};

/**
* | output |
* | --- |
* | "Licence chosen." |
*
* @param {Upload_Preflight_License_OkInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_preflight_license_ok = /** @type {((inputs?: Upload_Preflight_License_OkInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Preflight_License_OkInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_preflight_license_ok(inputs)
	if (locale === "de") return de_upload_preflight_license_ok(inputs)
	if (locale === "fr") return fr_upload_preflight_license_ok(inputs)
	if (locale === "it") return it_upload_preflight_license_ok(inputs)
	if (locale === "nl") return nl_upload_preflight_license_ok(inputs)
	if (locale === "pl") return pl_upload_preflight_license_ok(inputs)
	if (locale === "pt") return pt_upload_preflight_license_ok(inputs)
	if (locale === "ru") return ru_upload_preflight_license_ok(inputs)
	if (locale === "sv") return sv_upload_preflight_license_ok(inputs)
	if (locale === "tr") return tr_upload_preflight_license_ok(inputs)
	if (locale === "zh") return zh_upload_preflight_license_ok(inputs)
	if (locale === "ja") return ja_upload_preflight_license_ok(inputs)
	return en_upload_preflight_license_ok(inputs)
});
