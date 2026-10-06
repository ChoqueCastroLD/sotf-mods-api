/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ version: NonNullable<unknown>, mod: NonNullable<unknown> }} Signals_Status_Version_HeldInputs */

const en_signals_status_version_held = /** @type {(inputs: Signals_Status_Version_HeldInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Version ${i?.version} of ${i?.mod} is on hold for a moderator check`)
};

const es_signals_status_version_held = /** @type {(inputs: Signals_Status_Version_HeldInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`La versión ${i?.version} de ${i?.mod} está retenida hasta que la revise un moderador`)
};

const de_signals_status_version_held = /** @type {(inputs: Signals_Status_Version_HeldInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Version ${i?.version} von ${i?.mod} wartet auf die Prüfung durch einen Moderator`)
};

const fr_signals_status_version_held = /** @type {(inputs: Signals_Status_Version_HeldInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`La version ${i?.version} de ${i?.mod} est en attente de la vérification d’un modérateur`)
};

const it_signals_status_version_held = /** @type {(inputs: Signals_Status_Version_HeldInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`La versione ${i?.version} di ${i?.mod} è in attesa del controllo di un moderatore`)
};

const nl_signals_status_version_held = /** @type {(inputs: Signals_Status_Version_HeldInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Versie ${i?.version} van ${i?.mod} wacht op controle door een moderator`)
};

const pl_signals_status_version_held = /** @type {(inputs: Signals_Status_Version_HeldInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wersja ${i?.version} (${i?.mod}) czeka na sprawdzenie przez moderatora`)
};

const pt_signals_status_version_held = /** @type {(inputs: Signals_Status_Version_HeldInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`A versão ${i?.version} de ${i?.mod} está retida até a checagem de um moderador`)
};

const ru_signals_status_version_held = /** @type {(inputs: Signals_Status_Version_HeldInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Версия ${i?.version} мода ${i?.mod} ждёт проверки модератором`)
};

const sv_signals_status_version_held = /** @type {(inputs: Signals_Status_Version_HeldInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Version ${i?.version} av ${i?.mod} väntar på att en moderator ska kolla den`)
};

const tr_signals_status_version_held = /** @type {(inputs: Signals_Status_Version_HeldInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} modunun ${i?.version} sürümü bir moderatörün kontrolünü bekliyor`)
};

const zh_signals_status_version_held = /** @type {(inputs: Signals_Status_Version_HeldInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} 的 ${i?.version} 版本正在等待版主审核`)
};

const ja_signals_status_version_held = /** @type {(inputs: Signals_Status_Version_HeldInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} のバージョン ${i?.version} はモデレーターの確認待ちです`)
};

/**
* | output |
* | --- |
* | "Version {version} of {mod} is on hold for a moderator check" |
*
* @param {Signals_Status_Version_HeldInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_status_version_held = /** @type {((inputs: Signals_Status_Version_HeldInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Status_Version_HeldInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_status_version_held(inputs)
	if (locale === "de") return de_signals_status_version_held(inputs)
	if (locale === "fr") return fr_signals_status_version_held(inputs)
	if (locale === "it") return it_signals_status_version_held(inputs)
	if (locale === "nl") return nl_signals_status_version_held(inputs)
	if (locale === "pl") return pl_signals_status_version_held(inputs)
	if (locale === "pt") return pt_signals_status_version_held(inputs)
	if (locale === "ru") return ru_signals_status_version_held(inputs)
	if (locale === "sv") return sv_signals_status_version_held(inputs)
	if (locale === "tr") return tr_signals_status_version_held(inputs)
	if (locale === "zh") return zh_signals_status_version_held(inputs)
	if (locale === "ja") return ja_signals_status_version_held(inputs)
	return en_signals_status_version_held(inputs)
});
