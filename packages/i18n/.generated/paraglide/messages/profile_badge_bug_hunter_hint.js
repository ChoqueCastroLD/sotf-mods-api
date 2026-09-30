/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Badge_Bug_Hunter_HintInputs */

const en_profile_badge_bug_hunter_hint = /** @type {(inputs: Profile_Badge_Bug_Hunter_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Have 5 bug reports marked as resolved by the creators.`)
};

const es_profile_badge_bug_hunter_hint = /** @type {(inputs: Profile_Badge_Bug_Hunter_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Consigue que los creadores marquen 5 de tus reportes de bugs como resueltos.`)
};

const de_profile_badge_bug_hunter_hint = /** @type {(inputs: Profile_Badge_Bug_Hunter_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lass 5 deiner Bugmeldungen von den Erstellern als gelöst markieren.`)
};

const fr_profile_badge_bug_hunter_hint = /** @type {(inputs: Profile_Badge_Bug_Hunter_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Faites marquer 5 de vos signalements de bugs comme résolus par les créateurs.`)
};

const it_profile_badge_bug_hunter_hint = /** @type {(inputs: Profile_Badge_Bug_Hunter_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fai segnare dai creatori 5 tue segnalazioni di bug come risolte.`)
};

const nl_profile_badge_bug_hunter_hint = /** @type {(inputs: Profile_Badge_Bug_Hunter_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Laat 5 van je bugmeldingen door de makers als opgelost markeren.`)
};

const pl_profile_badge_bug_hunter_hint = /** @type {(inputs: Profile_Badge_Bug_Hunter_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niech twórcy oznaczą 5 twoich zgłoszeń błędów jako rozwiązane.`)
};

const pt_profile_badge_bug_hunter_hint = /** @type {(inputs: Profile_Badge_Bug_Hunter_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tenha 5 relatos de bug marcados como resolvidos pelos criadores.`)
};

const ru_profile_badge_bug_hunter_hint = /** @type {(inputs: Profile_Badge_Bug_Hunter_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Добейтесь, чтобы авторы отметили 5 ваших баг-репортов как решённые.`)
};

const sv_profile_badge_bug_hunter_hint = /** @type {(inputs: Profile_Badge_Bug_Hunter_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Få 5 av dina buggrapporter markerade som lösta av skaparna.`)
};

const tr_profile_badge_bug_hunter_hint = /** @type {(inputs: Profile_Badge_Bug_Hunter_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`5 hata bildiriminin üreticiler tarafından çözüldü olarak işaretlenmesini sağla.`)
};

const zh_profile_badge_bug_hunter_hint = /** @type {(inputs: Profile_Badge_Bug_Hunter_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`有 5 份漏洞报告被创作者标记为已解决。`)
};

const ja_profile_badge_bug_hunter_hint = /** @type {(inputs: Profile_Badge_Bug_Hunter_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`バグ報告 5 件をクリエイターに解決済みにしてもらう。`)
};

/**
* | output |
* | --- |
* | "Have 5 bug reports marked as resolved by the creators." |
*
* @param {Profile_Badge_Bug_Hunter_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_badge_bug_hunter_hint = /** @type {((inputs?: Profile_Badge_Bug_Hunter_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Badge_Bug_Hunter_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_badge_bug_hunter_hint(inputs)
	if (locale === "de") return de_profile_badge_bug_hunter_hint(inputs)
	if (locale === "fr") return fr_profile_badge_bug_hunter_hint(inputs)
	if (locale === "it") return it_profile_badge_bug_hunter_hint(inputs)
	if (locale === "nl") return nl_profile_badge_bug_hunter_hint(inputs)
	if (locale === "pl") return pl_profile_badge_bug_hunter_hint(inputs)
	if (locale === "pt") return pt_profile_badge_bug_hunter_hint(inputs)
	if (locale === "ru") return ru_profile_badge_bug_hunter_hint(inputs)
	if (locale === "sv") return sv_profile_badge_bug_hunter_hint(inputs)
	if (locale === "tr") return tr_profile_badge_bug_hunter_hint(inputs)
	if (locale === "zh") return zh_profile_badge_bug_hunter_hint(inputs)
	if (locale === "ja") return ja_profile_badge_bug_hunter_hint(inputs)
	return en_profile_badge_bug_hunter_hint(inputs)
});
