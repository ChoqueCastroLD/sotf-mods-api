/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ version: NonNullable<unknown> }} Me_Up_To_DateInputs */

const en_me_up_to_date = /** @type {(inputs: Me_Up_To_DateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Up to date (${i?.version})`)
};

const es_me_up_to_date = /** @type {(inputs: Me_Up_To_DateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Al día (${i?.version})`)
};

const de_me_up_to_date = /** @type {(inputs: Me_Up_To_DateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Aktuell (${i?.version})`)
};

const fr_me_up_to_date = /** @type {(inputs: Me_Up_To_DateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`À jour (${i?.version})`)
};

const it_me_up_to_date = /** @type {(inputs: Me_Up_To_DateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Aggiornata (${i?.version})`)
};

const nl_me_up_to_date = /** @type {(inputs: Me_Up_To_DateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bijgewerkt (${i?.version})`)
};

const pl_me_up_to_date = /** @type {(inputs: Me_Up_To_DateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Aktualny (${i?.version})`)
};

const pt_me_up_to_date = /** @type {(inputs: Me_Up_To_DateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Atualizado (${i?.version})`)
};

const ru_me_up_to_date = /** @type {(inputs: Me_Up_To_DateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Актуально (${i?.version})`)
};

const sv_me_up_to_date = /** @type {(inputs: Me_Up_To_DateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Uppdaterad (${i?.version})`)
};

const tr_me_up_to_date = /** @type {(inputs: Me_Up_To_DateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Güncel (${i?.version})`)
};

const zh_me_up_to_date = /** @type {(inputs: Me_Up_To_DateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已是最新（${i?.version}）`)
};

const ja_me_up_to_date = /** @type {(inputs: Me_Up_To_DateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`最新（${i?.version}）`)
};

/**
* | output |
* | --- |
* | "Up to date ({version})" |
*
* @param {Me_Up_To_DateInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_up_to_date = /** @type {((inputs: Me_Up_To_DateInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Up_To_DateInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_up_to_date(inputs)
	if (locale === "de") return de_me_up_to_date(inputs)
	if (locale === "fr") return fr_me_up_to_date(inputs)
	if (locale === "it") return it_me_up_to_date(inputs)
	if (locale === "nl") return nl_me_up_to_date(inputs)
	if (locale === "pl") return pl_me_up_to_date(inputs)
	if (locale === "pt") return pt_me_up_to_date(inputs)
	if (locale === "ru") return ru_me_up_to_date(inputs)
	if (locale === "sv") return sv_me_up_to_date(inputs)
	if (locale === "tr") return tr_me_up_to_date(inputs)
	if (locale === "zh") return zh_me_up_to_date(inputs)
	if (locale === "ja") return ja_me_up_to_date(inputs)
	return en_me_up_to_date(inputs)
});
