/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ share: NonNullable<unknown>, count: NonNullable<unknown> }} Profile_Achievements_Badge_ShareInputs */

const en_profile_achievements_badge_share = /** @type {(inputs: Profile_Achievements_Badge_ShareInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.share} of survivors · ${count__number} holder`);
	return /** @type {LocalizedString} */ (`${i?.share} of survivors · ${count__number} holders`)
	
};

const es_profile_achievements_badge_share = /** @type {(inputs: Profile_Achievements_Badge_ShareInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.share} de los supervivientes · ${count__number} la tiene`);
	return /** @type {LocalizedString} */ (`${i?.share} de los supervivientes · ${count__number} la tienen`)
	
};

const de_profile_achievements_badge_share = /** @type {(inputs: Profile_Achievements_Badge_ShareInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.share} der Überlebenden · ${count__number} Besitzer`);
	return /** @type {LocalizedString} */ (`${i?.share} der Überlebenden · ${count__number} Besitzer`)
	
};

const fr_profile_achievements_badge_share = /** @type {(inputs: Profile_Achievements_Badge_ShareInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.share} des survivants · ${count__number} détenteur`);
	return /** @type {LocalizedString} */ (`${i?.share} des survivants · ${count__number} détenteurs`)
	
};

const it_profile_achievements_badge_share = /** @type {(inputs: Profile_Achievements_Badge_ShareInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.share} dei sopravvissuti · ${count__number} lo possiede`);
	return /** @type {LocalizedString} */ (`${i?.share} dei sopravvissuti · ${count__number} lo possiedono`)
	
};

const nl_profile_achievements_badge_share = /** @type {(inputs: Profile_Achievements_Badge_ShareInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.share} van de overlevenden · ${count__number} bezitter`);
	return /** @type {LocalizedString} */ (`${i?.share} van de overlevenden · ${count__number} bezitters`)
	
};

const pl_profile_achievements_badge_share = /** @type {(inputs: Profile_Achievements_Badge_ShareInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.share} ocalałych · ma ją ${count__number} osoba`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${i?.share} ocalałych · mają ją ${count__number} osoby`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${i?.share} ocalałych · ma ją ${count__number} osób`);
	return /** @type {LocalizedString} */ (`${i?.share} ocalałych · ma ją ${count__number} osoby`)
	
};

const pt_profile_achievements_badge_share = /** @type {(inputs: Profile_Achievements_Badge_ShareInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.share} dos sobreviventes · ${count__number} possui`);
	return /** @type {LocalizedString} */ (`${i?.share} dos sobreviventes · ${count__number} possuem`)
	
};

const ru_profile_achievements_badge_share = /** @type {(inputs: Profile_Achievements_Badge_ShareInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.share} выживших · есть у ${count__number} участника`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${i?.share} выживших · есть у ${count__number} участников`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${i?.share} выживших · есть у ${count__number} участников`);
	return /** @type {LocalizedString} */ (`${i?.share} выживших · есть у ${count__number} участника`)
	
};

const sv_profile_achievements_badge_share = /** @type {(inputs: Profile_Achievements_Badge_ShareInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.share} av överlevarna · ${count__number} innehavare`);
	return /** @type {LocalizedString} */ (`${i?.share} av överlevarna · ${count__number} innehavare`)
	
};

const tr_profile_achievements_badge_share = /** @type {(inputs: Profile_Achievements_Badge_ShareInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Hayatta kalanların ${i?.share} kadarı · ${count__number} sahip`);
	return /** @type {LocalizedString} */ (`Hayatta kalanların ${i?.share} kadarı · ${count__number} sahip`)
	
};

const zh_profile_achievements_badge_share = /** @type {(inputs: Profile_Achievements_Badge_ShareInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`${i?.share} 的幸存者 · ${count__number} 人拥有`)
};

const ja_profile_achievements_badge_share = /** @type {(inputs: Profile_Achievements_Badge_ShareInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`サバイバーの ${i?.share} · ${count__number} 人が所持`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{share} of survivors · {count__number} holder" |
* | * | "{share} of survivors · {count__number} holders" |
*
* @param {Profile_Achievements_Badge_ShareInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_achievements_badge_share = /** @type {((inputs: Profile_Achievements_Badge_ShareInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Achievements_Badge_ShareInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_achievements_badge_share(inputs)
	if (locale === "de") return de_profile_achievements_badge_share(inputs)
	if (locale === "fr") return fr_profile_achievements_badge_share(inputs)
	if (locale === "it") return it_profile_achievements_badge_share(inputs)
	if (locale === "nl") return nl_profile_achievements_badge_share(inputs)
	if (locale === "pl") return pl_profile_achievements_badge_share(inputs)
	if (locale === "pt") return pt_profile_achievements_badge_share(inputs)
	if (locale === "ru") return ru_profile_achievements_badge_share(inputs)
	if (locale === "sv") return sv_profile_achievements_badge_share(inputs)
	if (locale === "tr") return tr_profile_achievements_badge_share(inputs)
	if (locale === "zh") return zh_profile_achievements_badge_share(inputs)
	if (locale === "ja") return ja_profile_achievements_badge_share(inputs)
	return en_profile_achievements_badge_share(inputs)
});
