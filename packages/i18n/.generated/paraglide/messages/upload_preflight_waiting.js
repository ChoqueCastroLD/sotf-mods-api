/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Preflight_WaitingInputs */

const en_upload_preflight_waiting = /** @type {(inputs: Upload_Preflight_WaitingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The checks appear once your draft is saved.`)
};

const es_upload_preflight_waiting = /** @type {(inputs: Upload_Preflight_WaitingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Las comprobaciones aparecen cuando se guarda tu borrador.`)
};

const de_upload_preflight_waiting = /** @type {(inputs: Upload_Preflight_WaitingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Checks erscheinen, sobald dein Entwurf gespeichert ist.`)
};

const fr_upload_preflight_waiting = /** @type {(inputs: Upload_Preflight_WaitingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les vérifications apparaissent une fois votre brouillon enregistré.`)
};

const it_upload_preflight_waiting = /** @type {(inputs: Upload_Preflight_WaitingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I controlli appaiono quando la bozza è salvata.`)
};

const nl_upload_preflight_waiting = /** @type {(inputs: Upload_Preflight_WaitingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De checks verschijnen zodra je concept is opgeslagen.`)
};

const pl_upload_preflight_waiting = /** @type {(inputs: Upload_Preflight_WaitingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kontrole pojawią się po zapisaniu szkicu.`)
};

const pt_upload_preflight_waiting = /** @type {(inputs: Upload_Preflight_WaitingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`As verificações aparecem quando o rascunho é salvo.`)
};

const ru_upload_preflight_waiting = /** @type {(inputs: Upload_Preflight_WaitingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Проверки появятся после сохранения черновика.`)
};

const sv_upload_preflight_waiting = /** @type {(inputs: Upload_Preflight_WaitingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kontrollerna visas när ditt utkast har sparats.`)
};

const tr_upload_preflight_waiting = /** @type {(inputs: Upload_Preflight_WaitingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kontroller taslağın kaydedilince görünür.`)
};

const zh_upload_preflight_waiting = /** @type {(inputs: Upload_Preflight_WaitingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`草稿保存后会显示检查结果。`)
};

const ja_upload_preflight_waiting = /** @type {(inputs: Upload_Preflight_WaitingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下書きが保存されるとチェック結果が表示されます。`)
};

/**
* | output |
* | --- |
* | "The checks appear once your draft is saved." |
*
* @param {Upload_Preflight_WaitingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_preflight_waiting = /** @type {((inputs?: Upload_Preflight_WaitingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Preflight_WaitingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_preflight_waiting(inputs)
	if (locale === "de") return de_upload_preflight_waiting(inputs)
	if (locale === "fr") return fr_upload_preflight_waiting(inputs)
	if (locale === "it") return it_upload_preflight_waiting(inputs)
	if (locale === "nl") return nl_upload_preflight_waiting(inputs)
	if (locale === "pl") return pl_upload_preflight_waiting(inputs)
	if (locale === "pt") return pt_upload_preflight_waiting(inputs)
	if (locale === "ru") return ru_upload_preflight_waiting(inputs)
	if (locale === "sv") return sv_upload_preflight_waiting(inputs)
	if (locale === "tr") return tr_upload_preflight_waiting(inputs)
	if (locale === "zh") return zh_upload_preflight_waiting(inputs)
	if (locale === "ja") return ja_upload_preflight_waiting(inputs)
	return en_upload_preflight_waiting(inputs)
});
