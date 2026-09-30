/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown>, downloads: NonNullable<unknown> }} Profile_Achievements_Tier_ThresholdInputs */

const en_profile_achievements_tier_threshold = /** @type {(inputs: Profile_Achievements_Tier_ThresholdInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.downloads} download`);
	return /** @type {LocalizedString} */ (`${i?.downloads} downloads`)
	
};

const es_profile_achievements_tier_threshold = /** @type {(inputs: Profile_Achievements_Tier_ThresholdInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.downloads} descarga`);
	return /** @type {LocalizedString} */ (`${i?.downloads} descargas`)
	
};

const de_profile_achievements_tier_threshold = /** @type {(inputs: Profile_Achievements_Tier_ThresholdInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.downloads} Download`);
	return /** @type {LocalizedString} */ (`${i?.downloads} Downloads`)
	
};

const fr_profile_achievements_tier_threshold = /** @type {(inputs: Profile_Achievements_Tier_ThresholdInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.downloads} téléchargement`);
	return /** @type {LocalizedString} */ (`${i?.downloads} téléchargements`)
	
};

const it_profile_achievements_tier_threshold = /** @type {(inputs: Profile_Achievements_Tier_ThresholdInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.downloads} download`);
	return /** @type {LocalizedString} */ (`${i?.downloads} download`)
	
};

const nl_profile_achievements_tier_threshold = /** @type {(inputs: Profile_Achievements_Tier_ThresholdInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.downloads} download`);
	return /** @type {LocalizedString} */ (`${i?.downloads} downloads`)
	
};

const pl_profile_achievements_tier_threshold = /** @type {(inputs: Profile_Achievements_Tier_ThresholdInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.downloads} pobranie`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${i?.downloads} pobrania`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${i?.downloads} pobrań`);
	return /** @type {LocalizedString} */ (`${i?.downloads} pobrania`)
	
};

const pt_profile_achievements_tier_threshold = /** @type {(inputs: Profile_Achievements_Tier_ThresholdInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.downloads} download`);
	return /** @type {LocalizedString} */ (`${i?.downloads} downloads`)
	
};

const ru_profile_achievements_tier_threshold = /** @type {(inputs: Profile_Achievements_Tier_ThresholdInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.downloads} скачивание`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${i?.downloads} скачивания`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${i?.downloads} скачиваний`);
	return /** @type {LocalizedString} */ (`${i?.downloads} скачивания`)
	
};

const sv_profile_achievements_tier_threshold = /** @type {(inputs: Profile_Achievements_Tier_ThresholdInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.downloads} nedladdning`);
	return /** @type {LocalizedString} */ (`${i?.downloads} nedladdningar`)
	
};

const tr_profile_achievements_tier_threshold = /** @type {(inputs: Profile_Achievements_Tier_ThresholdInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.downloads} indirme`);
	return /** @type {LocalizedString} */ (`${i?.downloads} indirme`)
	
};

const zh_profile_achievements_tier_threshold = /** @type {(inputs: Profile_Achievements_Tier_ThresholdInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});return /** @type {LocalizedString} */ (`${i?.downloads} 次下载`)
};

const ja_profile_achievements_tier_threshold = /** @type {(inputs: Profile_Achievements_Tier_ThresholdInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});return /** @type {LocalizedString} */ (`${i?.downloads} ダウンロード`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{downloads} download" |
* | * | "{downloads} downloads" |
*
* @param {Profile_Achievements_Tier_ThresholdInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_achievements_tier_threshold = /** @type {((inputs: Profile_Achievements_Tier_ThresholdInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Achievements_Tier_ThresholdInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_achievements_tier_threshold(inputs)
	if (locale === "de") return de_profile_achievements_tier_threshold(inputs)
	if (locale === "fr") return fr_profile_achievements_tier_threshold(inputs)
	if (locale === "it") return it_profile_achievements_tier_threshold(inputs)
	if (locale === "nl") return nl_profile_achievements_tier_threshold(inputs)
	if (locale === "pl") return pl_profile_achievements_tier_threshold(inputs)
	if (locale === "pt") return pt_profile_achievements_tier_threshold(inputs)
	if (locale === "ru") return ru_profile_achievements_tier_threshold(inputs)
	if (locale === "sv") return sv_profile_achievements_tier_threshold(inputs)
	if (locale === "tr") return tr_profile_achievements_tier_threshold(inputs)
	if (locale === "zh") return zh_profile_achievements_tier_threshold(inputs)
	if (locale === "ja") return ja_profile_achievements_tier_threshold(inputs)
	return en_profile_achievements_tier_threshold(inputs)
});
