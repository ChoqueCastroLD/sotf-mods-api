/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Emails_Notify_Creator_Highlights_HeadingInputs */

const en_emails_notify_creator_highlights_heading = /** @type {(inputs: Emails_Notify_Creator_Highlights_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Highlights`)
};

const es_emails_notify_creator_highlights_heading = /** @type {(inputs: Emails_Notify_Creator_Highlights_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Destacados`)
};

const de_emails_notify_creator_highlights_heading = /** @type {(inputs: Emails_Notify_Creator_Highlights_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Höhepunkte`)
};

const fr_emails_notify_creator_highlights_heading = /** @type {(inputs: Emails_Notify_Creator_Highlights_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Temps forts`)
};

const it_emails_notify_creator_highlights_heading = /** @type {(inputs: Emails_Notify_Creator_Highlights_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In evidenza`)
};

const nl_emails_notify_creator_highlights_heading = /** @type {(inputs: Emails_Notify_Creator_Highlights_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hoogtepunten`)
};

const pl_emails_notify_creator_highlights_heading = /** @type {(inputs: Emails_Notify_Creator_Highlights_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyróżnienia`)
};

const pt_emails_notify_creator_highlights_heading = /** @type {(inputs: Emails_Notify_Creator_Highlights_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Destaques`)
};

const ru_emails_notify_creator_highlights_heading = /** @type {(inputs: Emails_Notify_Creator_Highlights_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Главное`)
};

const sv_emails_notify_creator_highlights_heading = /** @type {(inputs: Emails_Notify_Creator_Highlights_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Höjdpunkter`)
};

const tr_emails_notify_creator_highlights_heading = /** @type {(inputs: Emails_Notify_Creator_Highlights_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Öne çıkanlar`)
};

const zh_emails_notify_creator_highlights_heading = /** @type {(inputs: Emails_Notify_Creator_Highlights_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`亮点`)
};

const ja_emails_notify_creator_highlights_heading = /** @type {(inputs: Emails_Notify_Creator_Highlights_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ハイライト`)
};

/**
* | output |
* | --- |
* | "Highlights" |
*
* @param {Emails_Notify_Creator_Highlights_HeadingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_notify_creator_highlights_heading = /** @type {((inputs?: Emails_Notify_Creator_Highlights_HeadingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Creator_Highlights_HeadingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_notify_creator_highlights_heading(inputs)
	if (locale === "de") return de_emails_notify_creator_highlights_heading(inputs)
	if (locale === "fr") return fr_emails_notify_creator_highlights_heading(inputs)
	if (locale === "it") return it_emails_notify_creator_highlights_heading(inputs)
	if (locale === "nl") return nl_emails_notify_creator_highlights_heading(inputs)
	if (locale === "pl") return pl_emails_notify_creator_highlights_heading(inputs)
	if (locale === "pt") return pt_emails_notify_creator_highlights_heading(inputs)
	if (locale === "ru") return ru_emails_notify_creator_highlights_heading(inputs)
	if (locale === "sv") return sv_emails_notify_creator_highlights_heading(inputs)
	if (locale === "tr") return tr_emails_notify_creator_highlights_heading(inputs)
	if (locale === "zh") return zh_emails_notify_creator_highlights_heading(inputs)
	if (locale === "ja") return ja_emails_notify_creator_highlights_heading(inputs)
	return en_emails_notify_creator_highlights_heading(inputs)
});
