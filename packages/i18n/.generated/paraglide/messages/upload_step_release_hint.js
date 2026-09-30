/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Step_Release_HintInputs */

const en_upload_step_release_hint = /** @type {(inputs: Upload_Step_Release_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Version and changelog`)
};

const es_upload_step_release_hint = /** @type {(inputs: Upload_Step_Release_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versión y cambios`)
};

const de_upload_step_release_hint = /** @type {(inputs: Upload_Step_Release_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Version und Änderungen`)
};

const fr_upload_step_release_hint = /** @type {(inputs: Upload_Step_Release_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Version et changements`)
};

const it_upload_step_release_hint = /** @type {(inputs: Upload_Step_Release_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versione e modifiche`)
};

const nl_upload_step_release_hint = /** @type {(inputs: Upload_Step_Release_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versie en wijzigingen`)
};

const pl_upload_step_release_hint = /** @type {(inputs: Upload_Step_Release_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wersja i zmiany`)
};

const pt_upload_step_release_hint = /** @type {(inputs: Upload_Step_Release_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versão e mudanças`)
};

const ru_upload_step_release_hint = /** @type {(inputs: Upload_Step_Release_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Версия и изменения`)
};

const sv_upload_step_release_hint = /** @type {(inputs: Upload_Step_Release_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Version och ändringar`)
};

const tr_upload_step_release_hint = /** @type {(inputs: Upload_Step_Release_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sürüm ve değişiklikler`)
};

const zh_upload_step_release_hint = /** @type {(inputs: Upload_Step_Release_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`版本号与更新内容`)
};

const ja_upload_step_release_hint = /** @type {(inputs: Upload_Step_Release_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`バージョンと変更点`)
};

/**
* | output |
* | --- |
* | "Version and changelog" |
*
* @param {Upload_Step_Release_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_step_release_hint = /** @type {((inputs?: Upload_Step_Release_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Step_Release_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_step_release_hint(inputs)
	if (locale === "de") return de_upload_step_release_hint(inputs)
	if (locale === "fr") return fr_upload_step_release_hint(inputs)
	if (locale === "it") return it_upload_step_release_hint(inputs)
	if (locale === "nl") return nl_upload_step_release_hint(inputs)
	if (locale === "pl") return pl_upload_step_release_hint(inputs)
	if (locale === "pt") return pt_upload_step_release_hint(inputs)
	if (locale === "ru") return ru_upload_step_release_hint(inputs)
	if (locale === "sv") return sv_upload_step_release_hint(inputs)
	if (locale === "tr") return tr_upload_step_release_hint(inputs)
	if (locale === "zh") return zh_upload_step_release_hint(inputs)
	if (locale === "ja") return ja_upload_step_release_hint(inputs)
	return en_upload_step_release_hint(inputs)
});
