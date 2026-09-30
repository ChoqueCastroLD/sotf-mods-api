/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Checks_No_FlagsInputs */

const en_ranger_checks_no_flags = /** @type {(inputs: Ranger_Checks_No_FlagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No check raised a flag.`)
};

const es_ranger_checks_no_flags = /** @type {(inputs: Ranger_Checks_No_FlagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ninguna comprobación ha dado aviso.`)
};

const de_ranger_checks_no_flags = /** @type {(inputs: Ranger_Checks_No_FlagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keine Prüfung hat angeschlagen.`)
};

const fr_ranger_checks_no_flags = /** @type {(inputs: Ranger_Checks_No_FlagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun contrôle n’a levé d’alerte.`)
};

const it_ranger_checks_no_flags = /** @type {(inputs: Ranger_Checks_No_FlagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessun controllo ha segnalato problemi.`)
};

const nl_ranger_checks_no_flags = /** @type {(inputs: Ranger_Checks_No_FlagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen enkele controle sloeg aan.`)
};

const pl_ranger_checks_no_flags = /** @type {(inputs: Ranger_Checks_No_FlagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Żadna kontrola nie zgłosiła problemu.`)
};

const pt_ranger_checks_no_flags = /** @type {(inputs: Ranger_Checks_No_FlagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhuma verificação apontou problema.`)
};

const ru_ranger_checks_no_flags = /** @type {(inputs: Ranger_Checks_No_FlagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ни одна проверка не сработала.`)
};

const sv_ranger_checks_no_flags = /** @type {(inputs: Ranger_Checks_No_FlagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ingen kontroll slog larm.`)
};

const tr_ranger_checks_no_flags = /** @type {(inputs: Ranger_Checks_No_FlagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hiçbir kontrol uyarı vermedi.`)
};

const zh_ranger_checks_no_flags = /** @type {(inputs: Ranger_Checks_No_FlagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`没有任何检查发出警告。`)
};

const ja_ranger_checks_no_flags = /** @type {(inputs: Ranger_Checks_No_FlagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`警告を出したチェックはありません。`)
};

/**
* | output |
* | --- |
* | "No check raised a flag." |
*
* @param {Ranger_Checks_No_FlagsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_checks_no_flags = /** @type {((inputs?: Ranger_Checks_No_FlagsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Checks_No_FlagsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_checks_no_flags(inputs)
	if (locale === "de") return de_ranger_checks_no_flags(inputs)
	if (locale === "fr") return fr_ranger_checks_no_flags(inputs)
	if (locale === "it") return it_ranger_checks_no_flags(inputs)
	if (locale === "nl") return nl_ranger_checks_no_flags(inputs)
	if (locale === "pl") return pl_ranger_checks_no_flags(inputs)
	if (locale === "pt") return pt_ranger_checks_no_flags(inputs)
	if (locale === "ru") return ru_ranger_checks_no_flags(inputs)
	if (locale === "sv") return sv_ranger_checks_no_flags(inputs)
	if (locale === "tr") return tr_ranger_checks_no_flags(inputs)
	if (locale === "zh") return zh_ranger_checks_no_flags(inputs)
	if (locale === "ja") return ja_ranger_checks_no_flags(inputs)
	return en_ranger_checks_no_flags(inputs)
});
