/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Emails_Notify_Instant_HeadingInputs */

const en_emails_notify_instant_heading = /** @type {(inputs: Emails_Notify_Instant_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New signals`)
};

const es_emails_notify_instant_heading = /** @type {(inputs: Emails_Notify_Instant_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Señales nuevas`)
};

const de_emails_notify_instant_heading = /** @type {(inputs: Emails_Notify_Instant_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neue Signale`)
};

const fr_emails_notify_instant_heading = /** @type {(inputs: Emails_Notify_Instant_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nouveaux signaux`)
};

const it_emails_notify_instant_heading = /** @type {(inputs: Emails_Notify_Instant_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuovi segnali`)
};

const nl_emails_notify_instant_heading = /** @type {(inputs: Emails_Notify_Instant_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieuwe signalen`)
};

const pl_emails_notify_instant_heading = /** @type {(inputs: Emails_Notify_Instant_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nowe sygnały`)
};

const pt_emails_notify_instant_heading = /** @type {(inputs: Emails_Notify_Instant_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Novos sinais`)
};

const ru_emails_notify_instant_heading = /** @type {(inputs: Emails_Notify_Instant_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Новые сигналы`)
};

const sv_emails_notify_instant_heading = /** @type {(inputs: Emails_Notify_Instant_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nya signaler`)
};

const tr_emails_notify_instant_heading = /** @type {(inputs: Emails_Notify_Instant_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yeni sinyaller`)
};

const zh_emails_notify_instant_heading = /** @type {(inputs: Emails_Notify_Instant_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新信号`)
};

const ja_emails_notify_instant_heading = /** @type {(inputs: Emails_Notify_Instant_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新しいシグナル`)
};

/**
* | output |
* | --- |
* | "New signals" |
*
* @param {Emails_Notify_Instant_HeadingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_notify_instant_heading = /** @type {((inputs?: Emails_Notify_Instant_HeadingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Instant_HeadingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_notify_instant_heading(inputs)
	if (locale === "de") return de_emails_notify_instant_heading(inputs)
	if (locale === "fr") return fr_emails_notify_instant_heading(inputs)
	if (locale === "it") return it_emails_notify_instant_heading(inputs)
	if (locale === "nl") return nl_emails_notify_instant_heading(inputs)
	if (locale === "pl") return pl_emails_notify_instant_heading(inputs)
	if (locale === "pt") return pt_emails_notify_instant_heading(inputs)
	if (locale === "ru") return ru_emails_notify_instant_heading(inputs)
	if (locale === "sv") return sv_emails_notify_instant_heading(inputs)
	if (locale === "tr") return tr_emails_notify_instant_heading(inputs)
	if (locale === "zh") return zh_emails_notify_instant_heading(inputs)
	if (locale === "ja") return ja_emails_notify_instant_heading(inputs)
	return en_emails_notify_instant_heading(inputs)
});
