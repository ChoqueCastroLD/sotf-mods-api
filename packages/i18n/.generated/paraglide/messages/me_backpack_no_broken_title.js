/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_Backpack_No_Broken_TitleInputs */

const en_me_backpack_no_broken_title = /** @type {(inputs: Me_Backpack_No_Broken_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nothing reported broken`)
};

const es_me_backpack_no_broken_title = /** @type {(inputs: Me_Backpack_No_Broken_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nada roto`)
};

const de_me_backpack_no_broken_title = /** @type {(inputs: Me_Backpack_No_Broken_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nichts als kaputt gemeldet`)
};

const fr_me_backpack_no_broken_title = /** @type {(inputs: Me_Backpack_No_Broken_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rien de signalé comme cassé`)
};

const it_me_backpack_no_broken_title = /** @type {(inputs: Me_Backpack_No_Broken_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niente di non funzionante`)
};

const nl_me_backpack_no_broken_title = /** @type {(inputs: Me_Backpack_No_Broken_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niets als kapot gemeld`)
};

const pl_me_backpack_no_broken_title = /** @type {(inputs: Me_Backpack_No_Broken_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nic nie zgłoszono jako zepsute`)
};

const pt_me_backpack_no_broken_title = /** @type {(inputs: Me_Backpack_No_Broken_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nada relatado como quebrado`)
};

const ru_me_backpack_no_broken_title = /** @type {(inputs: Me_Backpack_No_Broken_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ничего не сломано`)
};

const sv_me_backpack_no_broken_title = /** @type {(inputs: Me_Backpack_No_Broken_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inget rapporterat trasigt`)
};

const tr_me_backpack_no_broken_title = /** @type {(inputs: Me_Backpack_No_Broken_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bozuk bildirilen yok`)
};

const zh_me_backpack_no_broken_title = /** @type {(inputs: Me_Backpack_No_Broken_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`没有失效报告`)
};

const ja_me_backpack_no_broken_title = /** @type {(inputs: Me_Backpack_No_Broken_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`動作しない報告はありません`)
};

/**
* | output |
* | --- |
* | "Nothing reported broken" |
*
* @param {Me_Backpack_No_Broken_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_backpack_no_broken_title = /** @type {((inputs?: Me_Backpack_No_Broken_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Backpack_No_Broken_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_backpack_no_broken_title(inputs)
	if (locale === "de") return de_me_backpack_no_broken_title(inputs)
	if (locale === "fr") return fr_me_backpack_no_broken_title(inputs)
	if (locale === "it") return it_me_backpack_no_broken_title(inputs)
	if (locale === "nl") return nl_me_backpack_no_broken_title(inputs)
	if (locale === "pl") return pl_me_backpack_no_broken_title(inputs)
	if (locale === "pt") return pt_me_backpack_no_broken_title(inputs)
	if (locale === "ru") return ru_me_backpack_no_broken_title(inputs)
	if (locale === "sv") return sv_me_backpack_no_broken_title(inputs)
	if (locale === "tr") return tr_me_backpack_no_broken_title(inputs)
	if (locale === "zh") return zh_me_backpack_no_broken_title(inputs)
	if (locale === "ja") return ja_me_backpack_no_broken_title(inputs)
	return en_me_backpack_no_broken_title(inputs)
});
