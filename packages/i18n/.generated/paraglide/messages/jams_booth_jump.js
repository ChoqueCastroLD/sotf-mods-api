/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Booth_JumpInputs */

const en_jams_booth_jump = /** @type {(inputs: Jams_Booth_JumpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jump to an entry`)
};

const es_jams_booth_jump = /** @type {(inputs: Jams_Booth_JumpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ir a una participación`)
};

const de_jams_booth_jump = /** @type {(inputs: Jams_Booth_JumpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zu einem Beitrag springen`)
};

const fr_jams_booth_jump = /** @type {(inputs: Jams_Booth_JumpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aller à une participation`)
};

const it_jams_booth_jump = /** @type {(inputs: Jams_Booth_JumpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vai a un'iscrizione`)
};

const nl_jams_booth_jump = /** @type {(inputs: Jams_Booth_JumpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ga naar een inzending`)
};

const pl_jams_booth_jump = /** @type {(inputs: Jams_Booth_JumpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przejdź do zgłoszenia`)
};

const pt_jams_booth_jump = /** @type {(inputs: Jams_Booth_JumpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ir para uma inscrição`)
};

const ru_jams_booth_jump = /** @type {(inputs: Jams_Booth_JumpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Перейти к работе`)
};

const sv_jams_booth_jump = /** @type {(inputs: Jams_Booth_JumpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hoppa till ett bidrag`)
};

const tr_jams_booth_jump = /** @type {(inputs: Jams_Booth_JumpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir başvuruya git`)
};

const zh_jams_booth_jump = /** @type {(inputs: Jams_Booth_JumpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`跳到某个作品`)
};

const ja_jams_booth_jump = /** @type {(inputs: Jams_Booth_JumpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`作品へ移動`)
};

/**
* | output |
* | --- |
* | "Jump to an entry" |
*
* @param {Jams_Booth_JumpInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_booth_jump = /** @type {((inputs?: Jams_Booth_JumpInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Booth_JumpInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_booth_jump(inputs)
	if (locale === "de") return de_jams_booth_jump(inputs)
	if (locale === "fr") return fr_jams_booth_jump(inputs)
	if (locale === "it") return it_jams_booth_jump(inputs)
	if (locale === "nl") return nl_jams_booth_jump(inputs)
	if (locale === "pl") return pl_jams_booth_jump(inputs)
	if (locale === "pt") return pt_jams_booth_jump(inputs)
	if (locale === "ru") return ru_jams_booth_jump(inputs)
	if (locale === "sv") return sv_jams_booth_jump(inputs)
	if (locale === "tr") return tr_jams_booth_jump(inputs)
	if (locale === "zh") return zh_jams_booth_jump(inputs)
	if (locale === "ja") return ja_jams_booth_jump(inputs)
	return en_jams_booth_jump(inputs)
});
