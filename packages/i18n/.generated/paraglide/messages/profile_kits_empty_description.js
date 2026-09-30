/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Profile_Kits_Empty_DescriptionInputs */

const en_profile_kits_empty_description = /** @type {(inputs: Profile_Kits_Empty_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} hasn’t shared a kit yet. Kits are curated mod loadouts anyone can install in one go.`)
};

const es_profile_kits_empty_description = /** @type {(inputs: Profile_Kits_Empty_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} aún no ha compartido ningún kit. Los kits son selecciones de mods que cualquiera puede instalar de una vez.`)
};

const de_profile_kits_empty_description = /** @type {(inputs: Profile_Kits_Empty_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} hat noch kein Kit geteilt. Kits sind kuratierte Mod-Sammlungen, die jeder in einem Rutsch installieren kann.`)
};

const fr_profile_kits_empty_description = /** @type {(inputs: Profile_Kits_Empty_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} n’a encore partagé aucun kit. Les kits sont des sélections de mods que chacun peut installer d’un coup.`)
};

const it_profile_kits_empty_description = /** @type {(inputs: Profile_Kits_Empty_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} non ha ancora condiviso un kit. I kit sono selezioni di mod che chiunque può installare in un colpo solo.`)
};

const nl_profile_kits_empty_description = /** @type {(inputs: Profile_Kits_Empty_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} heeft nog geen kit gedeeld. Kits zijn samengestelde modpakketten die iedereen in één keer kan installeren.`)
};

const pl_profile_kits_empty_description = /** @type {(inputs: Profile_Kits_Empty_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} nie udostępnił(a) jeszcze żadnego zestawu. Zestawy to wybrane paczki modów, które każdy zainstaluje za jednym razem.`)
};

const pt_profile_kits_empty_description = /** @type {(inputs: Profile_Kits_Empty_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} ainda não compartilhou nenhum kit. Kits são seleções de mods que qualquer pessoa instala de uma vez.`)
};

const ru_profile_kits_empty_description = /** @type {(inputs: Profile_Kits_Empty_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} ещё не поделился(-ась) ни одним набором. Наборы — это подборки модов, которые можно установить за один раз.`)
};

const sv_profile_kits_empty_description = /** @type {(inputs: Profile_Kits_Empty_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} har inte delat något kit än. Kit är utvalda modpaket som vem som helst kan installera på en gång.`)
};

const tr_profile_kits_empty_description = /** @type {(inputs: Profile_Kits_Empty_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} henüz bir kit paylaşmadı. Kitler, herkesin tek seferde kurabileceği seçilmiş mod paketleridir.`)
};

const zh_profile_kits_empty_description = /** @type {(inputs: Profile_Kits_Empty_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} 还没有分享合集。合集是精选的模组组合，任何人都可以一次性安装。`)
};

const ja_profile_kits_empty_description = /** @type {(inputs: Profile_Kits_Empty_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} はまだキットを共有していません。キットは、誰でも一度にインストールできる MOD の厳選セットです。`)
};

/**
* | output |
* | --- |
* | "{name} hasn’t shared a kit yet. Kits are curated mod loadouts anyone can install in one go." |
*
* @param {Profile_Kits_Empty_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_kits_empty_description = /** @type {((inputs: Profile_Kits_Empty_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Kits_Empty_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_kits_empty_description(inputs)
	if (locale === "de") return de_profile_kits_empty_description(inputs)
	if (locale === "fr") return fr_profile_kits_empty_description(inputs)
	if (locale === "it") return it_profile_kits_empty_description(inputs)
	if (locale === "nl") return nl_profile_kits_empty_description(inputs)
	if (locale === "pl") return pl_profile_kits_empty_description(inputs)
	if (locale === "pt") return pt_profile_kits_empty_description(inputs)
	if (locale === "ru") return ru_profile_kits_empty_description(inputs)
	if (locale === "sv") return sv_profile_kits_empty_description(inputs)
	if (locale === "tr") return tr_profile_kits_empty_description(inputs)
	if (locale === "zh") return zh_profile_kits_empty_description(inputs)
	if (locale === "ja") return ja_profile_kits_empty_description(inputs)
	return en_profile_kits_empty_description(inputs)
});
