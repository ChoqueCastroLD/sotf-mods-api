/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Mod_Knowledge_Profile_TitleInputs */

const en_mod_knowledge_profile_title = /** @type {(inputs: Mod_Knowledge_Profile_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mods ${i?.name} co-authors`)
};

const es_mod_knowledge_profile_title = /** @type {(inputs: Mod_Knowledge_Profile_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mods en los que ${i?.name} colabora`)
};

const de_mod_knowledge_profile_title = /** @type {(inputs: Mod_Knowledge_Profile_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mods, bei denen ${i?.name} mitwirkt`)
};

const fr_mod_knowledge_profile_title = /** @type {(inputs: Mod_Knowledge_Profile_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mods coécrits par ${i?.name}`)
};

const it_mod_knowledge_profile_title = /** @type {(inputs: Mod_Knowledge_Profile_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mod co-creati da ${i?.name}`)
};

const nl_mod_knowledge_profile_title = /** @type {(inputs: Mod_Knowledge_Profile_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mods waaraan ${i?.name} meewerkt`)
};

const pl_mod_knowledge_profile_title = /** @type {(inputs: Mod_Knowledge_Profile_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mody współtworzone przez ${i?.name}`)
};

const pt_mod_knowledge_profile_title = /** @type {(inputs: Mod_Knowledge_Profile_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mods coautorados por ${i?.name}`)
};

const ru_mod_knowledge_profile_title = /** @type {(inputs: Mod_Knowledge_Profile_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Моды в соавторстве ${i?.name}`)
};

const sv_mod_knowledge_profile_title = /** @type {(inputs: Mod_Knowledge_Profile_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mods som ${i?.name} är medförfattare till`)
};

const tr_mod_knowledge_profile_title = /** @type {(inputs: Mod_Knowledge_Profile_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} kullanıcısının ortak yazdığı modlar`)
};

const zh_mod_knowledge_profile_title = /** @type {(inputs: Mod_Knowledge_Profile_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} 共同创作的模组`)
};

const ja_mod_knowledge_profile_title = /** @type {(inputs: Mod_Knowledge_Profile_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} が共同制作したMod`)
};

/**
* | output |
* | --- |
* | "Mods {name} co-authors" |
*
* @param {Mod_Knowledge_Profile_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_profile_title = /** @type {((inputs: Mod_Knowledge_Profile_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Profile_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_profile_title(inputs)
	if (locale === "de") return de_mod_knowledge_profile_title(inputs)
	if (locale === "fr") return fr_mod_knowledge_profile_title(inputs)
	if (locale === "it") return it_mod_knowledge_profile_title(inputs)
	if (locale === "nl") return nl_mod_knowledge_profile_title(inputs)
	if (locale === "pl") return pl_mod_knowledge_profile_title(inputs)
	if (locale === "pt") return pt_mod_knowledge_profile_title(inputs)
	if (locale === "ru") return ru_mod_knowledge_profile_title(inputs)
	if (locale === "sv") return sv_mod_knowledge_profile_title(inputs)
	if (locale === "tr") return tr_mod_knowledge_profile_title(inputs)
	if (locale === "zh") return zh_mod_knowledge_profile_title(inputs)
	if (locale === "ja") return ja_mod_knowledge_profile_title(inputs)
	return en_mod_knowledge_profile_title(inputs)
});
