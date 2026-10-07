/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_Ready_DoneInputs */

const en_jams_editor_ready_done = /** @type {(inputs: Jams_Editor_Ready_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ready to announce`)
};

const es_jams_editor_ready_done = /** @type {(inputs: Jams_Editor_Ready_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Listo para anunciar`)
};

const de_jams_editor_ready_done = /** @type {(inputs: Jams_Editor_Ready_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bereit zur Ankündigung`)
};

const fr_jams_editor_ready_done = /** @type {(inputs: Jams_Editor_Ready_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prêt à être annoncé`)
};

const it_jams_editor_ready_done = /** @type {(inputs: Jams_Editor_Ready_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pronto per l’annuncio`)
};

const nl_jams_editor_ready_done = /** @type {(inputs: Jams_Editor_Ready_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Klaar om aan te kondigen`)
};

const pl_jams_editor_ready_done = /** @type {(inputs: Jams_Editor_Ready_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gotowe do ogłoszenia`)
};

const pt_jams_editor_ready_done = /** @type {(inputs: Jams_Editor_Ready_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pronta para anunciar`)
};

const ru_jams_editor_ready_done = /** @type {(inputs: Jams_Editor_Ready_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Готово к объявлению`)
};

const sv_jams_editor_ready_done = /** @type {(inputs: Jams_Editor_Ready_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Redo att annonseras`)
};

const tr_jams_editor_ready_done = /** @type {(inputs: Jams_Editor_Ready_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Duyuruya hazır`)
};

const zh_jams_editor_ready_done = /** @type {(inputs: Jams_Editor_Ready_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`可以公布了`)
};

const ja_jams_editor_ready_done = /** @type {(inputs: Jams_Editor_Ready_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`告知の準備ができました`)
};

/**
* | output |
* | --- |
* | "Ready to announce" |
*
* @param {Jams_Editor_Ready_DoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_ready_done = /** @type {((inputs?: Jams_Editor_Ready_DoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Ready_DoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_ready_done(inputs)
	if (locale === "de") return de_jams_editor_ready_done(inputs)
	if (locale === "fr") return fr_jams_editor_ready_done(inputs)
	if (locale === "it") return it_jams_editor_ready_done(inputs)
	if (locale === "nl") return nl_jams_editor_ready_done(inputs)
	if (locale === "pl") return pl_jams_editor_ready_done(inputs)
	if (locale === "pt") return pt_jams_editor_ready_done(inputs)
	if (locale === "ru") return ru_jams_editor_ready_done(inputs)
	if (locale === "sv") return sv_jams_editor_ready_done(inputs)
	if (locale === "tr") return tr_jams_editor_ready_done(inputs)
	if (locale === "zh") return zh_jams_editor_ready_done(inputs)
	if (locale === "ja") return ja_jams_editor_ready_done(inputs)
	return en_jams_editor_ready_done(inputs)
});
