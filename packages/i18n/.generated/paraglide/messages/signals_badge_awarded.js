/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ badge: NonNullable<unknown> }} Signals_Badge_AwardedInputs */

const en_signals_badge_awarded = /** @type {(inputs: Signals_Badge_AwardedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Badge unlocked: ${i?.badge}`)
};

const es_signals_badge_awarded = /** @type {(inputs: Signals_Badge_AwardedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Insignia desbloqueada: ${i?.badge}`)
};

const de_signals_badge_awarded = /** @type {(inputs: Signals_Badge_AwardedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Abzeichen freigeschaltet: ${i?.badge}`)
};

const fr_signals_badge_awarded = /** @type {(inputs: Signals_Badge_AwardedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Badge débloqué : ${i?.badge}`)
};

const it_signals_badge_awarded = /** @type {(inputs: Signals_Badge_AwardedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Distintivo sbloccato: ${i?.badge}`)
};

const nl_signals_badge_awarded = /** @type {(inputs: Signals_Badge_AwardedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Badge ontgrendeld: ${i?.badge}`)
};

const pl_signals_badge_awarded = /** @type {(inputs: Signals_Badge_AwardedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Odblokowano odznakę: ${i?.badge}`)
};

const pt_signals_badge_awarded = /** @type {(inputs: Signals_Badge_AwardedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Insígnia desbloqueada: ${i?.badge}`)
};

const ru_signals_badge_awarded = /** @type {(inputs: Signals_Badge_AwardedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Получен значок: ${i?.badge}`)
};

const sv_signals_badge_awarded = /** @type {(inputs: Signals_Badge_AwardedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Märke upplåst: ${i?.badge}`)
};

const tr_signals_badge_awarded = /** @type {(inputs: Signals_Badge_AwardedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Rozet açıldı: ${i?.badge}`)
};

const zh_signals_badge_awarded = /** @type {(inputs: Signals_Badge_AwardedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`解锁徽章：${i?.badge}`)
};

const ja_signals_badge_awarded = /** @type {(inputs: Signals_Badge_AwardedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`バッジを獲得：${i?.badge}`)
};

/**
* | output |
* | --- |
* | "Badge unlocked: {badge}" |
*
* @param {Signals_Badge_AwardedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_badge_awarded = /** @type {((inputs: Signals_Badge_AwardedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Badge_AwardedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_badge_awarded(inputs)
	if (locale === "de") return de_signals_badge_awarded(inputs)
	if (locale === "fr") return fr_signals_badge_awarded(inputs)
	if (locale === "it") return it_signals_badge_awarded(inputs)
	if (locale === "nl") return nl_signals_badge_awarded(inputs)
	if (locale === "pl") return pl_signals_badge_awarded(inputs)
	if (locale === "pt") return pt_signals_badge_awarded(inputs)
	if (locale === "ru") return ru_signals_badge_awarded(inputs)
	if (locale === "sv") return sv_signals_badge_awarded(inputs)
	if (locale === "tr") return tr_signals_badge_awarded(inputs)
	if (locale === "zh") return zh_signals_badge_awarded(inputs)
	if (locale === "ja") return ja_signals_badge_awarded(inputs)
	return en_signals_badge_awarded(inputs)
});
