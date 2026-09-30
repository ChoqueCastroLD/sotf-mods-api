/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Badge_Jam_Podium_HintInputs */

const en_profile_badge_jam_podium_hint = /** @type {(inputs: Profile_Badge_Jam_Podium_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Finish in the top 3 of a category in a Mod Jam. Can be earned again.`)
};

const es_profile_badge_jam_podium_hint = /** @type {(inputs: Profile_Badge_Jam_Podium_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Queda entre los 3 primeros de una categoría en una Mod Jam. Se puede ganar varias veces.`)
};

const de_profile_badge_jam_podium_hint = /** @type {(inputs: Profile_Badge_Jam_Podium_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Landen in einer Kategorie einer Mod Jam unter den Top 3. Kann mehrfach verdient werden.`)
};

const fr_profile_badge_jam_podium_hint = /** @type {(inputs: Profile_Badge_Jam_Podium_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Terminez dans le top 3 d'une catégorie d'une Mod Jam. Peut être obtenu plusieurs fois.`)
};

const it_profile_badge_jam_podium_hint = /** @type {(inputs: Profile_Badge_Jam_Podium_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chiudi tra i primi 3 di una categoria in una Mod Jam. Si può ottenere più volte.`)
};

const nl_profile_badge_jam_podium_hint = /** @type {(inputs: Profile_Badge_Jam_Podium_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eindig in de top 3 van een categorie in een Mod Jam. Kan meerdere keren worden verdiend.`)
};

const pl_profile_badge_jam_podium_hint = /** @type {(inputs: Profile_Badge_Jam_Podium_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zajmij miejsce w pierwszej trójce kategorii w Mod Jam. Można zdobyć wielokrotnie.`)
};

const pt_profile_badge_jam_podium_hint = /** @type {(inputs: Profile_Badge_Jam_Podium_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Termine no top 3 de uma categoria numa Mod Jam. Pode ser ganho várias vezes.`)
};

const ru_profile_badge_jam_podium_hint = /** @type {(inputs: Profile_Badge_Jam_Podium_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Займите место в тройке лучших в категории Mod Jam. Можно получить несколько раз.`)
};

const sv_profile_badge_jam_podium_hint = /** @type {(inputs: Profile_Badge_Jam_Podium_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hamna bland de tre bästa i en kategori i en Mod Jam. Kan förtjänas flera gånger.`)
};

const tr_profile_badge_jam_podium_hint = /** @type {(inputs: Profile_Badge_Jam_Podium_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir Mod Jam'de bir kategoride ilk 3'e gir. Birden çok kez kazanılabilir.`)
};

const zh_profile_badge_jam_podium_hint = /** @type {(inputs: Profile_Badge_Jam_Podium_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`在 Mod Jam 的某个类别中进入前三名。可重复获得。`)
};

const ja_profile_badge_jam_podium_hint = /** @type {(inputs: Profile_Badge_Jam_Podium_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod Jam のカテゴリで上位3位に入る。複数回獲得できます。`)
};

/**
* | output |
* | --- |
* | "Finish in the top 3 of a category in a Mod Jam. Can be earned again." |
*
* @param {Profile_Badge_Jam_Podium_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_badge_jam_podium_hint = /** @type {((inputs?: Profile_Badge_Jam_Podium_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Badge_Jam_Podium_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_badge_jam_podium_hint(inputs)
	if (locale === "de") return de_profile_badge_jam_podium_hint(inputs)
	if (locale === "fr") return fr_profile_badge_jam_podium_hint(inputs)
	if (locale === "it") return it_profile_badge_jam_podium_hint(inputs)
	if (locale === "nl") return nl_profile_badge_jam_podium_hint(inputs)
	if (locale === "pl") return pl_profile_badge_jam_podium_hint(inputs)
	if (locale === "pt") return pt_profile_badge_jam_podium_hint(inputs)
	if (locale === "ru") return ru_profile_badge_jam_podium_hint(inputs)
	if (locale === "sv") return sv_profile_badge_jam_podium_hint(inputs)
	if (locale === "tr") return tr_profile_badge_jam_podium_hint(inputs)
	if (locale === "zh") return zh_profile_badge_jam_podium_hint(inputs)
	if (locale === "ja") return ja_profile_badge_jam_podium_hint(inputs)
	return en_profile_badge_jam_podium_hint(inputs)
});
