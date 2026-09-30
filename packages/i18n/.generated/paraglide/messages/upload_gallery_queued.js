/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Gallery_QueuedInputs */

const en_upload_gallery_queued = /** @type {(inputs: Upload_Gallery_QueuedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Waiting…`)
};

const es_upload_gallery_queued = /** @type {(inputs: Upload_Gallery_QueuedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En espera…`)
};

const de_upload_gallery_queued = /** @type {(inputs: Upload_Gallery_QueuedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wartet…`)
};

const fr_upload_gallery_queued = /** @type {(inputs: Upload_Gallery_QueuedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En attente…`)
};

const it_upload_gallery_queued = /** @type {(inputs: Upload_Gallery_QueuedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In attesa…`)
};

const nl_upload_gallery_queued = /** @type {(inputs: Upload_Gallery_QueuedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wacht…`)
};

const pl_upload_gallery_queued = /** @type {(inputs: Upload_Gallery_QueuedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oczekuje…`)
};

const pt_upload_gallery_queued = /** @type {(inputs: Upload_Gallery_QueuedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aguardando…`)
};

const ru_upload_gallery_queued = /** @type {(inputs: Upload_Gallery_QueuedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`В очереди…`)
};

const sv_upload_gallery_queued = /** @type {(inputs: Upload_Gallery_QueuedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Väntar…`)
};

const tr_upload_gallery_queued = /** @type {(inputs: Upload_Gallery_QueuedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bekliyor…`)
};

const zh_upload_gallery_queued = /** @type {(inputs: Upload_Gallery_QueuedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`等待中…`)
};

const ja_upload_gallery_queued = /** @type {(inputs: Upload_Gallery_QueuedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`待機中…`)
};

/**
* | output |
* | --- |
* | "Waiting…" |
*
* @param {Upload_Gallery_QueuedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_gallery_queued = /** @type {((inputs?: Upload_Gallery_QueuedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Gallery_QueuedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_gallery_queued(inputs)
	if (locale === "de") return de_upload_gallery_queued(inputs)
	if (locale === "fr") return fr_upload_gallery_queued(inputs)
	if (locale === "it") return it_upload_gallery_queued(inputs)
	if (locale === "nl") return nl_upload_gallery_queued(inputs)
	if (locale === "pl") return pl_upload_gallery_queued(inputs)
	if (locale === "pt") return pt_upload_gallery_queued(inputs)
	if (locale === "ru") return ru_upload_gallery_queued(inputs)
	if (locale === "sv") return sv_upload_gallery_queued(inputs)
	if (locale === "tr") return tr_upload_gallery_queued(inputs)
	if (locale === "zh") return zh_upload_gallery_queued(inputs)
	if (locale === "ja") return ja_upload_gallery_queued(inputs)
	return en_upload_gallery_queued(inputs)
});
