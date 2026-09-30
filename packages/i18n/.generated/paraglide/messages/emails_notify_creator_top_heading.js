/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Emails_Notify_Creator_Top_HeadingInputs */

const en_emails_notify_creator_top_heading = /** @type {(inputs: Emails_Notify_Creator_Top_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your mods this week`)
};

const es_emails_notify_creator_top_heading = /** @type {(inputs: Emails_Notify_Creator_Top_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tus mods esta semana`)
};

const de_emails_notify_creator_top_heading = /** @type {(inputs: Emails_Notify_Creator_Top_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deine Mods diese Woche`)
};

const fr_emails_notify_creator_top_heading = /** @type {(inputs: Emails_Notify_Creator_Top_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vos mods cette semaine`)
};

const it_emails_notify_creator_top_heading = /** @type {(inputs: Emails_Notify_Creator_Top_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I tuoi mod questa settimana`)
};

const nl_emails_notify_creator_top_heading = /** @type {(inputs: Emails_Notify_Creator_Top_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je mods deze week`)
};

const pl_emails_notify_creator_top_heading = /** @type {(inputs: Emails_Notify_Creator_Top_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twoje mody w tym tygodniu`)
};

const pt_emails_notify_creator_top_heading = /** @type {(inputs: Emails_Notify_Creator_Top_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seus mods nesta semana`)
};

const ru_emails_notify_creator_top_heading = /** @type {(inputs: Emails_Notify_Creator_Top_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ваши моды на этой неделе`)
};

const sv_emails_notify_creator_top_heading = /** @type {(inputs: Emails_Notify_Creator_Top_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dina moddar den här veckan`)
};

const tr_emails_notify_creator_top_heading = /** @type {(inputs: Emails_Notify_Creator_Top_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu hafta modların`)
};

const zh_emails_notify_creator_top_heading = /** @type {(inputs: Emails_Notify_Creator_Top_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的模组本周表现`)
};

const ja_emails_notify_creator_top_heading = /** @type {(inputs: Emails_Notify_Creator_Top_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`今週のあなたの MOD`)
};

/**
* | output |
* | --- |
* | "Your mods this week" |
*
* @param {Emails_Notify_Creator_Top_HeadingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_notify_creator_top_heading = /** @type {((inputs?: Emails_Notify_Creator_Top_HeadingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Creator_Top_HeadingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_notify_creator_top_heading(inputs)
	if (locale === "de") return de_emails_notify_creator_top_heading(inputs)
	if (locale === "fr") return fr_emails_notify_creator_top_heading(inputs)
	if (locale === "it") return it_emails_notify_creator_top_heading(inputs)
	if (locale === "nl") return nl_emails_notify_creator_top_heading(inputs)
	if (locale === "pl") return pl_emails_notify_creator_top_heading(inputs)
	if (locale === "pt") return pt_emails_notify_creator_top_heading(inputs)
	if (locale === "ru") return ru_emails_notify_creator_top_heading(inputs)
	if (locale === "sv") return sv_emails_notify_creator_top_heading(inputs)
	if (locale === "tr") return tr_emails_notify_creator_top_heading(inputs)
	if (locale === "zh") return zh_emails_notify_creator_top_heading(inputs)
	if (locale === "ja") return ja_emails_notify_creator_top_heading(inputs)
	return en_emails_notify_creator_top_heading(inputs)
});
