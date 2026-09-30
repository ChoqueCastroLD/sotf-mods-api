/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Profile_Activity_Count_ReleasesInputs */

const en_profile_activity_count_releases = /** @type {(inputs: Profile_Activity_Count_ReleasesInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} release`);
	return /** @type {LocalizedString} */ (`${count__number} releases`)
	
};

const es_profile_activity_count_releases = /** @type {(inputs: Profile_Activity_Count_ReleasesInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} publicación`);
	return /** @type {LocalizedString} */ (`${count__number} publicaciones`)
	
};

const de_profile_activity_count_releases = /** @type {(inputs: Profile_Activity_Count_ReleasesInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} Veröffentlichung`);
	return /** @type {LocalizedString} */ (`${count__number} Veröffentlichungen`)
	
};

const fr_profile_activity_count_releases = /** @type {(inputs: Profile_Activity_Count_ReleasesInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} publication`);
	return /** @type {LocalizedString} */ (`${count__number} publications`)
	
};

const it_profile_activity_count_releases = /** @type {(inputs: Profile_Activity_Count_ReleasesInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} pubblicazione`);
	return /** @type {LocalizedString} */ (`${count__number} pubblicazioni`)
	
};

const nl_profile_activity_count_releases = /** @type {(inputs: Profile_Activity_Count_ReleasesInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} release`);
	return /** @type {LocalizedString} */ (`${count__number} releases`)
	
};

const pl_profile_activity_count_releases = /** @type {(inputs: Profile_Activity_Count_ReleasesInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} wydanie`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} wydania`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} wydań`);
	return /** @type {LocalizedString} */ (`${count__number} wydania`)
	
};

const pt_profile_activity_count_releases = /** @type {(inputs: Profile_Activity_Count_ReleasesInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} publicação`);
	return /** @type {LocalizedString} */ (`${count__number} publicações`)
	
};

const ru_profile_activity_count_releases = /** @type {(inputs: Profile_Activity_Count_ReleasesInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} релиз`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} релиза`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} релизов`);
	return /** @type {LocalizedString} */ (`${count__number} релиза`)
	
};

const sv_profile_activity_count_releases = /** @type {(inputs: Profile_Activity_Count_ReleasesInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} släpp`);
	return /** @type {LocalizedString} */ (`${count__number} släpp`)
	
};

const tr_profile_activity_count_releases = /** @type {(inputs: Profile_Activity_Count_ReleasesInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} yayın`);
	return /** @type {LocalizedString} */ (`${count__number} yayın`)
	
};

const zh_profile_activity_count_releases = /** @type {(inputs: Profile_Activity_Count_ReleasesInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 次发布`)
};

const ja_profile_activity_count_releases = /** @type {(inputs: Profile_Activity_Count_ReleasesInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`リリース ${count__number} 件`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} release" |
* | * | "{count__number} releases" |
*
* @param {Profile_Activity_Count_ReleasesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_activity_count_releases = /** @type {((inputs: Profile_Activity_Count_ReleasesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Activity_Count_ReleasesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_activity_count_releases(inputs)
	if (locale === "de") return de_profile_activity_count_releases(inputs)
	if (locale === "fr") return fr_profile_activity_count_releases(inputs)
	if (locale === "it") return it_profile_activity_count_releases(inputs)
	if (locale === "nl") return nl_profile_activity_count_releases(inputs)
	if (locale === "pl") return pl_profile_activity_count_releases(inputs)
	if (locale === "pt") return pt_profile_activity_count_releases(inputs)
	if (locale === "ru") return ru_profile_activity_count_releases(inputs)
	if (locale === "sv") return sv_profile_activity_count_releases(inputs)
	if (locale === "tr") return tr_profile_activity_count_releases(inputs)
	if (locale === "zh") return zh_profile_activity_count_releases(inputs)
	if (locale === "ja") return ja_profile_activity_count_releases(inputs)
	return en_profile_activity_count_releases(inputs)
});
