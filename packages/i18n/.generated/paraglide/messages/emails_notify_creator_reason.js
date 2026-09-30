/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Emails_Notify_Creator_ReasonInputs */

const en_emails_notify_creator_reason = /** @type {(inputs: Emails_Notify_Creator_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You get this report because you publish on SOTF Mods.`)
};

const es_emails_notify_creator_reason = /** @type {(inputs: Emails_Notify_Creator_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recibes este informe porque publicas en SOTF Mods.`)
};

const de_emails_notify_creator_reason = /** @type {(inputs: Emails_Notify_Creator_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du erhältst diesen Bericht, weil du auf SOTF Mods veröffentlichst.`)
};

const fr_emails_notify_creator_reason = /** @type {(inputs: Emails_Notify_Creator_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vous recevez ce rapport car vous publiez sur SOTF Mods.`)
};

const it_emails_notify_creator_reason = /** @type {(inputs: Emails_Notify_Creator_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ricevi questo rapporto perché pubblichi su SOTF Mods.`)
};

const nl_emails_notify_creator_reason = /** @type {(inputs: Emails_Notify_Creator_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je krijgt dit rapport omdat je op SOTF Mods publiceert.`)
};

const pl_emails_notify_creator_reason = /** @type {(inputs: Emails_Notify_Creator_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otrzymujesz ten raport, ponieważ publikujesz w SOTF Mods.`)
};

const pt_emails_notify_creator_reason = /** @type {(inputs: Emails_Notify_Creator_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Você recebe este relatório porque publica no SOTF Mods.`)
};

const ru_emails_notify_creator_reason = /** @type {(inputs: Emails_Notify_Creator_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вы получаете этот отчёт, потому что публикуете на SOTF Mods.`)
};

const sv_emails_notify_creator_reason = /** @type {(inputs: Emails_Notify_Creator_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du får den här rapporten eftersom du publicerar på SOTF Mods.`)
};

const tr_emails_notify_creator_reason = /** @type {(inputs: Emails_Notify_Creator_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods’ta içerik yayımladığın için bu raporu alıyorsun.`)
};

const zh_emails_notify_creator_reason = /** @type {(inputs: Emails_Notify_Creator_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你收到此报告，是因为你在 SOTF Mods 上发布内容。`)
};

const ja_emails_notify_creator_reason = /** @type {(inputs: Emails_Notify_Creator_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods で公開しているため、このレポートをお送りしています。`)
};

/**
* | output |
* | --- |
* | "You get this report because you publish on SOTF Mods." |
*
* @param {Emails_Notify_Creator_ReasonInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_notify_creator_reason = /** @type {((inputs?: Emails_Notify_Creator_ReasonInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Creator_ReasonInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_notify_creator_reason(inputs)
	if (locale === "de") return de_emails_notify_creator_reason(inputs)
	if (locale === "fr") return fr_emails_notify_creator_reason(inputs)
	if (locale === "it") return it_emails_notify_creator_reason(inputs)
	if (locale === "nl") return nl_emails_notify_creator_reason(inputs)
	if (locale === "pl") return pl_emails_notify_creator_reason(inputs)
	if (locale === "pt") return pt_emails_notify_creator_reason(inputs)
	if (locale === "ru") return ru_emails_notify_creator_reason(inputs)
	if (locale === "sv") return sv_emails_notify_creator_reason(inputs)
	if (locale === "tr") return tr_emails_notify_creator_reason(inputs)
	if (locale === "zh") return zh_emails_notify_creator_reason(inputs)
	if (locale === "ja") return ja_emails_notify_creator_reason(inputs)
	return en_emails_notify_creator_reason(inputs)
});
