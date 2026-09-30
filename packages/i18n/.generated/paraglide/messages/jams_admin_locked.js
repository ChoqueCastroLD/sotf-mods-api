/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Admin_LockedInputs */

const en_jams_admin_locked = /** @type {(inputs: Jams_Admin_LockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Phase locked`)
};

const es_jams_admin_locked = /** @type {(inputs: Jams_Admin_LockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fase bloqueada`)
};

const de_jams_admin_locked = /** @type {(inputs: Jams_Admin_LockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Phase gesperrt`)
};

const fr_jams_admin_locked = /** @type {(inputs: Jams_Admin_LockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Phase verrouillée`)
};

const it_jams_admin_locked = /** @type {(inputs: Jams_Admin_LockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fase bloccata`)
};

const nl_jams_admin_locked = /** @type {(inputs: Jams_Admin_LockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fase vergrendeld`)
};

const pl_jams_admin_locked = /** @type {(inputs: Jams_Admin_LockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Faza zablokowana`)
};

const pt_jams_admin_locked = /** @type {(inputs: Jams_Admin_LockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fase travada`)
};

const ru_jams_admin_locked = /** @type {(inputs: Jams_Admin_LockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Фаза закреплена`)
};

const sv_jams_admin_locked = /** @type {(inputs: Jams_Admin_LockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fas låst`)
};

const tr_jams_admin_locked = /** @type {(inputs: Jams_Admin_LockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aşama kilitli`)
};

const zh_jams_admin_locked = /** @type {(inputs: Jams_Admin_LockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`阶段已锁定`)
};

const ja_jams_admin_locked = /** @type {(inputs: Jams_Admin_LockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フェーズ固定中`)
};

/**
* | output |
* | --- |
* | "Phase locked" |
*
* @param {Jams_Admin_LockedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_admin_locked = /** @type {((inputs?: Jams_Admin_LockedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Admin_LockedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_admin_locked(inputs)
	if (locale === "de") return de_jams_admin_locked(inputs)
	if (locale === "fr") return fr_jams_admin_locked(inputs)
	if (locale === "it") return it_jams_admin_locked(inputs)
	if (locale === "nl") return nl_jams_admin_locked(inputs)
	if (locale === "pl") return pl_jams_admin_locked(inputs)
	if (locale === "pt") return pt_jams_admin_locked(inputs)
	if (locale === "ru") return ru_jams_admin_locked(inputs)
	if (locale === "sv") return sv_jams_admin_locked(inputs)
	if (locale === "tr") return tr_jams_admin_locked(inputs)
	if (locale === "zh") return zh_jams_admin_locked(inputs)
	if (locale === "ja") return ja_jams_admin_locked(inputs)
	return en_jams_admin_locked(inputs)
});
