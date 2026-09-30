/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Creators_Empty_DescriptionInputs */

const en_profile_creators_empty_description = /** @type {(inputs: Profile_Creators_Empty_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nobody has published a mod here yet. The first one gets the Crash Landing badge.`)
};

const es_profile_creators_empty_description = /** @type {(inputs: Profile_Creators_Empty_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nadie ha publicado un mod todavía. El primero se lleva la insignia Aterrizaje forzoso.`)
};

const de_profile_creators_empty_description = /** @type {(inputs: Profile_Creators_Empty_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hier hat noch niemand einen Mod veröffentlicht. Wer zuerst kommt, bekommt das Abzeichen Bruchlandung.`)
};

const fr_profile_creators_empty_description = /** @type {(inputs: Profile_Creators_Empty_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Personne n’a encore publié de mod ici. Le premier obtient le badge Atterrissage forcé.`)
};

const it_profile_creators_empty_description = /** @type {(inputs: Profile_Creators_Empty_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessuno ha ancora pubblicato una mod qui. Il primo ottiene il distintivo Atterraggio di fortuna.`)
};

const nl_profile_creators_empty_description = /** @type {(inputs: Profile_Creators_Empty_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Er is hier nog geen mod gepubliceerd. De eerste krijgt de badge Noodlanding.`)
};

const pl_profile_creators_empty_description = /** @type {(inputs: Profile_Creators_Empty_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nikt jeszcze nie opublikował tu moda. Pierwsza osoba dostanie odznakę Awaryjne lądowanie.`)
};

const pt_profile_creators_empty_description = /** @type {(inputs: Profile_Creators_Empty_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ninguém publicou um mod aqui ainda. O primeiro ganha a insígnia Pouso forçado.`)
};

const ru_profile_creators_empty_description = /** @type {(inputs: Profile_Creators_Empty_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Здесь ещё никто не опубликовал мод. Первый получит значок «Аварийная посадка».`)
};

const sv_profile_creators_empty_description = /** @type {(inputs: Profile_Creators_Empty_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ingen har publicerat en modd här än. Den första får märket Kraschlandning.`)
};

const tr_profile_creators_empty_description = /** @type {(inputs: Profile_Creators_Empty_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Burada henüz kimse mod yayınlamadı. İlk yayınlayan Zorunlu İniş rozetini alır.`)
};

const zh_profile_creators_empty_description = /** @type {(inputs: Profile_Creators_Empty_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`这里还没有人发布模组。第一位发布者将获得“迫降”徽章。`)
};

const ja_profile_creators_empty_description = /** @type {(inputs: Profile_Creators_Empty_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`まだ誰も MOD を公開していません。最初の人には「不時着」バッジが贈られます。`)
};

/**
* | output |
* | --- |
* | "Nobody has published a mod here yet. The first one gets the Crash Landing badge." |
*
* @param {Profile_Creators_Empty_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_creators_empty_description = /** @type {((inputs?: Profile_Creators_Empty_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Creators_Empty_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_creators_empty_description(inputs)
	if (locale === "de") return de_profile_creators_empty_description(inputs)
	if (locale === "fr") return fr_profile_creators_empty_description(inputs)
	if (locale === "it") return it_profile_creators_empty_description(inputs)
	if (locale === "nl") return nl_profile_creators_empty_description(inputs)
	if (locale === "pl") return pl_profile_creators_empty_description(inputs)
	if (locale === "pt") return pt_profile_creators_empty_description(inputs)
	if (locale === "ru") return ru_profile_creators_empty_description(inputs)
	if (locale === "sv") return sv_profile_creators_empty_description(inputs)
	if (locale === "tr") return tr_profile_creators_empty_description(inputs)
	if (locale === "zh") return zh_profile_creators_empty_description(inputs)
	if (locale === "ja") return ja_profile_creators_empty_description(inputs)
	return en_profile_creators_empty_description(inputs)
});
