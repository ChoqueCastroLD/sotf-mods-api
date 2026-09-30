/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_No_Current_VersionInputs */

const en_me_no_current_version = /** @type {(inputs: Me_No_Current_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No version available right now`)
};

const es_me_no_current_version = /** @type {(inputs: Me_No_Current_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ahora mismo no hay ninguna versión disponible`)
};

const de_me_no_current_version = /** @type {(inputs: Me_No_Current_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gerade ist keine Version verfügbar`)
};

const fr_me_no_current_version = /** @type {(inputs: Me_No_Current_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucune version disponible pour le moment`)
};

const it_me_no_current_version = /** @type {(inputs: Me_No_Current_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Al momento non c’è nessuna versione disponibile`)
};

const nl_me_no_current_version = /** @type {(inputs: Me_No_Current_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Er is nu geen versie beschikbaar`)
};

const pl_me_no_current_version = /** @type {(inputs: Me_No_Current_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obecnie nie ma dostępnej wersji`)
};

const pt_me_no_current_version = /** @type {(inputs: Me_No_Current_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhuma versão disponível no momento`)
};

const ru_me_no_current_version = /** @type {(inputs: Me_No_Current_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сейчас нет доступной версии`)
};

const sv_me_no_current_version = /** @type {(inputs: Me_No_Current_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ingen version finns tillgänglig just nu`)
};

const tr_me_no_current_version = /** @type {(inputs: Me_No_Current_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Şu anda kullanılabilir sürüm yok`)
};

const zh_me_no_current_version = /** @type {(inputs: Me_No_Current_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`当前没有可用版本`)
};

const ja_me_no_current_version = /** @type {(inputs: Me_No_Current_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`現在利用できるバージョンはありません`)
};

/**
* | output |
* | --- |
* | "No version available right now" |
*
* @param {Me_No_Current_VersionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_no_current_version = /** @type {((inputs?: Me_No_Current_VersionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_No_Current_VersionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_no_current_version(inputs)
	if (locale === "de") return de_me_no_current_version(inputs)
	if (locale === "fr") return fr_me_no_current_version(inputs)
	if (locale === "it") return it_me_no_current_version(inputs)
	if (locale === "nl") return nl_me_no_current_version(inputs)
	if (locale === "pl") return pl_me_no_current_version(inputs)
	if (locale === "pt") return pt_me_no_current_version(inputs)
	if (locale === "ru") return ru_me_no_current_version(inputs)
	if (locale === "sv") return sv_me_no_current_version(inputs)
	if (locale === "tr") return tr_me_no_current_version(inputs)
	if (locale === "zh") return zh_me_no_current_version(inputs)
	if (locale === "ja") return ja_me_no_current_version(inputs)
	return en_me_no_current_version(inputs)
});
