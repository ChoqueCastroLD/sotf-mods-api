/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Follow_DoneInputs */

const en_jams_follow_done = /** @type {(inputs: Jams_Follow_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You'll get updates about this jam.`)
};

const es_jams_follow_done = /** @type {(inputs: Jams_Follow_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recibirás novedades sobre este jam.`)
};

const de_jams_follow_done = /** @type {(inputs: Jams_Follow_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du erhältst Neuigkeiten zu dieser Jam.`)
};

const fr_jams_follow_done = /** @type {(inputs: Jams_Follow_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vous recevrez les actualités de ce jam.`)
};

const it_jams_follow_done = /** @type {(inputs: Jams_Follow_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Riceverai aggiornamenti su questo jam.`)
};

const nl_jams_follow_done = /** @type {(inputs: Jams_Follow_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je krijgt updates over deze jam.`)
};

const pl_jams_follow_done = /** @type {(inputs: Jams_Follow_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Będziesz otrzymywać informacje o tym jamie.`)
};

const pt_jams_follow_done = /** @type {(inputs: Jams_Follow_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Você receberá novidades sobre este jam.`)
};

const ru_jams_follow_done = /** @type {(inputs: Jams_Follow_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вы будете получать новости об этом джеме.`)
};

const sv_jams_follow_done = /** @type {(inputs: Jams_Follow_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du får uppdateringar om den här jammen.`)
};

const tr_jams_follow_done = /** @type {(inputs: Jams_Follow_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu jam hakkında güncellemeler alacaksınız.`)
};

const zh_jams_follow_done = /** @type {(inputs: Jams_Follow_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你将收到本场 Jam 的动态。`)
};

const ja_jams_follow_done = /** @type {(inputs: Jams_Follow_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このジャムの最新情報が届きます。`)
};

/**
* | output |
* | --- |
* | "You'll get updates about this jam." |
*
* @param {Jams_Follow_DoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_follow_done = /** @type {((inputs?: Jams_Follow_DoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Follow_DoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_follow_done(inputs)
	if (locale === "de") return de_jams_follow_done(inputs)
	if (locale === "fr") return fr_jams_follow_done(inputs)
	if (locale === "it") return it_jams_follow_done(inputs)
	if (locale === "nl") return nl_jams_follow_done(inputs)
	if (locale === "pl") return pl_jams_follow_done(inputs)
	if (locale === "pt") return pt_jams_follow_done(inputs)
	if (locale === "ru") return ru_jams_follow_done(inputs)
	if (locale === "sv") return sv_jams_follow_done(inputs)
	if (locale === "tr") return tr_jams_follow_done(inputs)
	if (locale === "zh") return zh_jams_follow_done(inputs)
	if (locale === "ja") return ja_jams_follow_done(inputs)
	return en_jams_follow_done(inputs)
});
