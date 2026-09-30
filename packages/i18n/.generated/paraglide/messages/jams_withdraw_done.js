/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Withdraw_DoneInputs */

const en_jams_withdraw_done = /** @type {(inputs: Jams_Withdraw_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entry withdrawn.`)
};

const es_jams_withdraw_done = /** @type {(inputs: Jams_Withdraw_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Participación retirada.`)
};

const de_jams_withdraw_done = /** @type {(inputs: Jams_Withdraw_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beitrag zurückgezogen.`)
};

const fr_jams_withdraw_done = /** @type {(inputs: Jams_Withdraw_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Participation retirée.`)
};

const it_jams_withdraw_done = /** @type {(inputs: Jams_Withdraw_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Iscrizione ritirata.`)
};

const nl_jams_withdraw_done = /** @type {(inputs: Jams_Withdraw_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inzending ingetrokken.`)
};

const pl_jams_withdraw_done = /** @type {(inputs: Jams_Withdraw_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zgłoszenie wycofane.`)
};

const pt_jams_withdraw_done = /** @type {(inputs: Jams_Withdraw_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inscrição retirada.`)
};

const ru_jams_withdraw_done = /** @type {(inputs: Jams_Withdraw_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Работа отозвана.`)
};

const sv_jams_withdraw_done = /** @type {(inputs: Jams_Withdraw_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bidraget har dragits tillbaka.`)
};

const tr_jams_withdraw_done = /** @type {(inputs: Jams_Withdraw_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Başvuru geri çekildi.`)
};

const zh_jams_withdraw_done = /** @type {(inputs: Jams_Withdraw_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`作品已撤回。`)
};

const ja_jams_withdraw_done = /** @type {(inputs: Jams_Withdraw_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`応募を取り下げました。`)
};

/**
* | output |
* | --- |
* | "Entry withdrawn." |
*
* @param {Jams_Withdraw_DoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_withdraw_done = /** @type {((inputs?: Jams_Withdraw_DoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Withdraw_DoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_withdraw_done(inputs)
	if (locale === "de") return de_jams_withdraw_done(inputs)
	if (locale === "fr") return fr_jams_withdraw_done(inputs)
	if (locale === "it") return it_jams_withdraw_done(inputs)
	if (locale === "nl") return nl_jams_withdraw_done(inputs)
	if (locale === "pl") return pl_jams_withdraw_done(inputs)
	if (locale === "pt") return pt_jams_withdraw_done(inputs)
	if (locale === "ru") return ru_jams_withdraw_done(inputs)
	if (locale === "sv") return sv_jams_withdraw_done(inputs)
	if (locale === "tr") return tr_jams_withdraw_done(inputs)
	if (locale === "zh") return zh_jams_withdraw_done(inputs)
	if (locale === "ja") return ja_jams_withdraw_done(inputs)
	return en_jams_withdraw_done(inputs)
});
