/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Badge_LockedInputs */

const en_ui_domain_badge_locked = /** @type {(inputs: Ui_Domain_Badge_LockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Locked`)
};

const es_ui_domain_badge_locked = /** @type {(inputs: Ui_Domain_Badge_LockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bloqueada`)
};

const de_ui_domain_badge_locked = /** @type {(inputs: Ui_Domain_Badge_LockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gesperrt`)
};

const fr_ui_domain_badge_locked = /** @type {(inputs: Ui_Domain_Badge_LockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verrouillé`)
};

const it_ui_domain_badge_locked = /** @type {(inputs: Ui_Domain_Badge_LockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bloccato`)
};

const nl_ui_domain_badge_locked = /** @type {(inputs: Ui_Domain_Badge_LockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vergrendeld`)
};

const pl_ui_domain_badge_locked = /** @type {(inputs: Ui_Domain_Badge_LockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zablokowana`)
};

const pt_ui_domain_badge_locked = /** @type {(inputs: Ui_Domain_Badge_LockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bloqueada`)
};

const ru_ui_domain_badge_locked = /** @type {(inputs: Ui_Domain_Badge_LockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Закрыт`)
};

const sv_ui_domain_badge_locked = /** @type {(inputs: Ui_Domain_Badge_LockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Låst`)
};

const tr_ui_domain_badge_locked = /** @type {(inputs: Ui_Domain_Badge_LockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kilitli`)
};

const zh_ui_domain_badge_locked = /** @type {(inputs: Ui_Domain_Badge_LockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未解锁`)
};

const ja_ui_domain_badge_locked = /** @type {(inputs: Ui_Domain_Badge_LockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未獲得`)
};

/**
* | output |
* | --- |
* | "Locked" |
*
* @param {Ui_Domain_Badge_LockedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_badge_locked = /** @type {((inputs?: Ui_Domain_Badge_LockedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Badge_LockedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_badge_locked(inputs)
	if (locale === "de") return de_ui_domain_badge_locked(inputs)
	if (locale === "fr") return fr_ui_domain_badge_locked(inputs)
	if (locale === "it") return it_ui_domain_badge_locked(inputs)
	if (locale === "nl") return nl_ui_domain_badge_locked(inputs)
	if (locale === "pl") return pl_ui_domain_badge_locked(inputs)
	if (locale === "pt") return pt_ui_domain_badge_locked(inputs)
	if (locale === "ru") return ru_ui_domain_badge_locked(inputs)
	if (locale === "sv") return sv_ui_domain_badge_locked(inputs)
	if (locale === "tr") return tr_ui_domain_badge_locked(inputs)
	if (locale === "zh") return zh_ui_domain_badge_locked(inputs)
	if (locale === "ja") return ja_ui_domain_badge_locked(inputs)
	return en_ui_domain_badge_locked(inputs)
});
