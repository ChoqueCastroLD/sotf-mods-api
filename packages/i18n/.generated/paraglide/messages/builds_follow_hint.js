/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Builds_Follow_HintInputs */

const en_builds_follow_hint = /** @type {(inputs: Builds_Follow_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Get notified when this build gets a new version`)
};

const es_builds_follow_hint = /** @type {(inputs: Builds_Follow_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recibe un aviso cuando esta build tenga una versión nueva`)
};

const de_builds_follow_hint = /** @type {(inputs: Builds_Follow_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Benachrichtigung erhalten, wenn dieser Build eine neue Version bekommt`)
};

const fr_builds_follow_hint = /** @type {(inputs: Builds_Follow_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Être prévenu quand cette build reçoit une nouvelle version`)
};

const it_builds_follow_hint = /** @type {(inputs: Builds_Follow_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ricevi un avviso quando questa build ha una nuova versione`)
};

const nl_builds_follow_hint = /** @type {(inputs: Builds_Follow_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Krijg een melding als deze build een nieuwe versie krijgt`)
};

const pl_builds_follow_hint = /** @type {(inputs: Builds_Follow_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otrzymuj powiadomienie, gdy ten build dostanie nową wersję`)
};

const pt_builds_follow_hint = /** @type {(inputs: Builds_Follow_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Receba um aviso quando esta build tiver uma versão nova`)
};

const ru_builds_follow_hint = /** @type {(inputs: Builds_Follow_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Получать уведомление, когда у постройки выйдет новая версия`)
};

const sv_builds_follow_hint = /** @type {(inputs: Builds_Follow_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Få en avisering när bygget får en ny version`)
};

const tr_builds_follow_hint = /** @type {(inputs: Builds_Follow_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu yapının yeni sürümü çıktığında bildirim al`)
};

const zh_builds_follow_hint = /** @type {(inputs: Builds_Follow_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`此建筑有新版本时通知我`)
};

const ja_builds_follow_hint = /** @type {(inputs: Builds_Follow_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`この建築の新しいバージョンが出たら通知を受け取る`)
};

/**
* | output |
* | --- |
* | "Get notified when this build gets a new version" |
*
* @param {Builds_Follow_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_follow_hint = /** @type {((inputs?: Builds_Follow_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Follow_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_follow_hint(inputs)
	if (locale === "de") return de_builds_follow_hint(inputs)
	if (locale === "fr") return fr_builds_follow_hint(inputs)
	if (locale === "it") return it_builds_follow_hint(inputs)
	if (locale === "nl") return nl_builds_follow_hint(inputs)
	if (locale === "pl") return pl_builds_follow_hint(inputs)
	if (locale === "pt") return pt_builds_follow_hint(inputs)
	if (locale === "ru") return ru_builds_follow_hint(inputs)
	if (locale === "sv") return sv_builds_follow_hint(inputs)
	if (locale === "tr") return tr_builds_follow_hint(inputs)
	if (locale === "zh") return zh_builds_follow_hint(inputs)
	if (locale === "ja") return ja_builds_follow_hint(inputs)
	return en_builds_follow_hint(inputs)
});
