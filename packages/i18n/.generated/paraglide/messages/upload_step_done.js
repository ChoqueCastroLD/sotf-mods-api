/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Step_DoneInputs */

const en_upload_step_done = /** @type {(inputs: Upload_Step_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`done`)
};

const es_upload_step_done = /** @type {(inputs: Upload_Step_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`hecho`)
};

const de_upload_step_done = /** @type {(inputs: Upload_Step_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`erledigt`)
};

const fr_upload_step_done = /** @type {(inputs: Upload_Step_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`terminée`)
};

const it_upload_step_done = /** @type {(inputs: Upload_Step_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`completato`)
};

const nl_upload_step_done = /** @type {(inputs: Upload_Step_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`klaar`)
};

const pl_upload_step_done = /** @type {(inputs: Upload_Step_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`gotowe`)
};

const pt_upload_step_done = /** @type {(inputs: Upload_Step_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`concluída`)
};

const ru_upload_step_done = /** @type {(inputs: Upload_Step_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`готово`)
};

const sv_upload_step_done = /** @type {(inputs: Upload_Step_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`klart`)
};

const tr_upload_step_done = /** @type {(inputs: Upload_Step_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`tamam`)
};

const zh_upload_step_done = /** @type {(inputs: Upload_Step_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已完成`)
};

const ja_upload_step_done = /** @type {(inputs: Upload_Step_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`完了`)
};

/**
* | output |
* | --- |
* | "done" |
*
* @param {Upload_Step_DoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_step_done = /** @type {((inputs?: Upload_Step_DoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Step_DoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_step_done(inputs)
	if (locale === "de") return de_upload_step_done(inputs)
	if (locale === "fr") return fr_upload_step_done(inputs)
	if (locale === "it") return it_upload_step_done(inputs)
	if (locale === "nl") return nl_upload_step_done(inputs)
	if (locale === "pl") return pl_upload_step_done(inputs)
	if (locale === "pt") return pt_upload_step_done(inputs)
	if (locale === "ru") return ru_upload_step_done(inputs)
	if (locale === "sv") return sv_upload_step_done(inputs)
	if (locale === "tr") return tr_upload_step_done(inputs)
	if (locale === "zh") return zh_upload_step_done(inputs)
	if (locale === "ja") return ja_upload_step_done(inputs)
	return en_upload_step_done(inputs)
});
