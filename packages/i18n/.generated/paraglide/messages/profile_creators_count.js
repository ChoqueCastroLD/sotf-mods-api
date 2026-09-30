/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown>, display: NonNullable<unknown> }} Profile_Creators_CountInputs */

const en_profile_creators_count = /** @type {(inputs: Profile_Creators_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} creator`);
	return /** @type {LocalizedString} */ (`${i?.display} creators`)
	
};

const es_profile_creators_count = /** @type {(inputs: Profile_Creators_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} creador`);
	return /** @type {LocalizedString} */ (`${i?.display} creadores`)
	
};

const de_profile_creators_count = /** @type {(inputs: Profile_Creators_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} Ersteller`);
	return /** @type {LocalizedString} */ (`${i?.display} Ersteller`)
	
};

const fr_profile_creators_count = /** @type {(inputs: Profile_Creators_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} créateur`);
	return /** @type {LocalizedString} */ (`${i?.display} créateurs`)
	
};

const it_profile_creators_count = /** @type {(inputs: Profile_Creators_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} creatore`);
	return /** @type {LocalizedString} */ (`${i?.display} creatori`)
	
};

const nl_profile_creators_count = /** @type {(inputs: Profile_Creators_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} maker`);
	return /** @type {LocalizedString} */ (`${i?.display} makers`)
	
};

const pl_profile_creators_count = /** @type {(inputs: Profile_Creators_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} twórca`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${i?.display} twórców`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${i?.display} twórców`);
	return /** @type {LocalizedString} */ (`${i?.display} twórcy`)
	
};

const pt_profile_creators_count = /** @type {(inputs: Profile_Creators_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} criador`);
	return /** @type {LocalizedString} */ (`${i?.display} criadores`)
	
};

const ru_profile_creators_count = /** @type {(inputs: Profile_Creators_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} автор`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${i?.display} автора`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${i?.display} авторов`);
	return /** @type {LocalizedString} */ (`${i?.display} автора`)
	
};

const sv_profile_creators_count = /** @type {(inputs: Profile_Creators_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} skapare`);
	return /** @type {LocalizedString} */ (`${i?.display} skapare`)
	
};

const tr_profile_creators_count = /** @type {(inputs: Profile_Creators_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} üretici`);
	return /** @type {LocalizedString} */ (`${i?.display} üretici`)
	
};

const zh_profile_creators_count = /** @type {(inputs: Profile_Creators_CountInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});return /** @type {LocalizedString} */ (`${i?.display} 位创作者`)
};

const ja_profile_creators_count = /** @type {(inputs: Profile_Creators_CountInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});return /** @type {LocalizedString} */ (`クリエイター ${i?.display} 人`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{display} creator" |
* | * | "{display} creators" |
*
* @param {Profile_Creators_CountInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_creators_count = /** @type {((inputs: Profile_Creators_CountInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Creators_CountInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_creators_count(inputs)
	if (locale === "de") return de_profile_creators_count(inputs)
	if (locale === "fr") return fr_profile_creators_count(inputs)
	if (locale === "it") return it_profile_creators_count(inputs)
	if (locale === "nl") return nl_profile_creators_count(inputs)
	if (locale === "pl") return pl_profile_creators_count(inputs)
	if (locale === "pt") return pt_profile_creators_count(inputs)
	if (locale === "ru") return ru_profile_creators_count(inputs)
	if (locale === "sv") return sv_profile_creators_count(inputs)
	if (locale === "tr") return tr_profile_creators_count(inputs)
	if (locale === "zh") return zh_profile_creators_count(inputs)
	if (locale === "ja") return ja_profile_creators_count(inputs)
	return en_profile_creators_count(inputs)
});
