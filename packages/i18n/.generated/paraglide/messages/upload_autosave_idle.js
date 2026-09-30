/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Autosave_IdleInputs */

const en_upload_autosave_idle = /** @type {(inputs: Upload_Autosave_IdleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nothing to save yet`)
};

const es_upload_autosave_idle = /** @type {(inputs: Upload_Autosave_IdleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aún no hay nada que guardar`)
};

const de_upload_autosave_idle = /** @type {(inputs: Upload_Autosave_IdleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noch nichts zu speichern`)
};

const fr_upload_autosave_idle = /** @type {(inputs: Upload_Autosave_IdleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rien à enregistrer pour l’instant`)
};

const it_upload_autosave_idle = /** @type {(inputs: Upload_Autosave_IdleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ancora niente da salvare`)
};

const nl_upload_autosave_idle = /** @type {(inputs: Upload_Autosave_IdleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nog niets om op te slaan`)
};

const pl_upload_autosave_idle = /** @type {(inputs: Upload_Autosave_IdleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Na razie nie ma czego zapisać`)
};

const pt_upload_autosave_idle = /** @type {(inputs: Upload_Autosave_IdleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nada para salvar ainda`)
};

const ru_upload_autosave_idle = /** @type {(inputs: Upload_Autosave_IdleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Пока нечего сохранять`)
};

const sv_upload_autosave_idle = /** @type {(inputs: Upload_Autosave_IdleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inget att spara än`)
};

const tr_upload_autosave_idle = /** @type {(inputs: Upload_Autosave_IdleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Henüz kaydedilecek bir şey yok`)
};

const zh_upload_autosave_idle = /** @type {(inputs: Upload_Autosave_IdleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`暂无需要保存的内容`)
};

const ja_upload_autosave_idle = /** @type {(inputs: Upload_Autosave_IdleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`まだ保存する内容はありません`)
};

/**
* | output |
* | --- |
* | "Nothing to save yet" |
*
* @param {Upload_Autosave_IdleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_autosave_idle = /** @type {((inputs?: Upload_Autosave_IdleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Autosave_IdleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_autosave_idle(inputs)
	if (locale === "de") return de_upload_autosave_idle(inputs)
	if (locale === "fr") return fr_upload_autosave_idle(inputs)
	if (locale === "it") return it_upload_autosave_idle(inputs)
	if (locale === "nl") return nl_upload_autosave_idle(inputs)
	if (locale === "pl") return pl_upload_autosave_idle(inputs)
	if (locale === "pt") return pt_upload_autosave_idle(inputs)
	if (locale === "ru") return ru_upload_autosave_idle(inputs)
	if (locale === "sv") return sv_upload_autosave_idle(inputs)
	if (locale === "tr") return tr_upload_autosave_idle(inputs)
	if (locale === "zh") return zh_upload_autosave_idle(inputs)
	if (locale === "ja") return ja_upload_autosave_idle(inputs)
	return en_upload_autosave_idle(inputs)
});
