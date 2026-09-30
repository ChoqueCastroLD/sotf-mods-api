/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ mods: NonNullable<unknown>, builds: NonNullable<unknown> }} Profile_Stat_Mods_TitleInputs */

const en_profile_stat_mods_title = /** @type {(inputs: Profile_Stat_Mods_TitleInputs) => LocalizedString} */ (i) => {const mods__plural = registry.plural("en", i?.mods, {});
	const mods__number = registry.number("en", i?.mods, {});
	const builds__plural = registry.plural("en", i?.builds, {});
	const builds__number = registry.number("en", i?.builds, {});
	if (mods__plural === "one" && builds__plural === "one") return /** @type {LocalizedString} */ (`${mods__number} mod and ${builds__number} build`);
	if (mods__plural === "one") return /** @type {LocalizedString} */ (`${mods__number} mod and ${builds__number} builds`);
	if (builds__plural === "one") return /** @type {LocalizedString} */ (`${mods__number} mods and ${builds__number} build`);
	return /** @type {LocalizedString} */ (`${mods__number} mods and ${builds__number} builds`)
	
};

const es_profile_stat_mods_title = /** @type {(inputs: Profile_Stat_Mods_TitleInputs) => LocalizedString} */ (i) => {const mods__plural = registry.plural("es", i?.mods, {});
	const mods__number = registry.number("es", i?.mods, {});
	const builds__plural = registry.plural("es", i?.builds, {});
	const builds__number = registry.number("es", i?.builds, {});
	if (mods__plural === "one" && builds__plural === "one") return /** @type {LocalizedString} */ (`${mods__number} mod y ${builds__number} build`);
	if (mods__plural === "one") return /** @type {LocalizedString} */ (`${mods__number} mod y ${builds__number} builds`);
	if (builds__plural === "one") return /** @type {LocalizedString} */ (`${mods__number} mods y ${builds__number} build`);
	return /** @type {LocalizedString} */ (`${mods__number} mods y ${builds__number} builds`)
	
};

const de_profile_stat_mods_title = /** @type {(inputs: Profile_Stat_Mods_TitleInputs) => LocalizedString} */ (i) => {const mods__plural = registry.plural("de", i?.mods, {});
	const mods__number = registry.number("de", i?.mods, {});
	const builds__plural = registry.plural("de", i?.builds, {});
	const builds__number = registry.number("de", i?.builds, {});
	if (mods__plural === "one" && builds__plural === "one") return /** @type {LocalizedString} */ (`${mods__number} Mod und ${builds__number} Build`);
	if (mods__plural === "one") return /** @type {LocalizedString} */ (`${mods__number} Mod und ${builds__number} Builds`);
	if (builds__plural === "one") return /** @type {LocalizedString} */ (`${mods__number} Mods und ${builds__number} Build`);
	return /** @type {LocalizedString} */ (`${mods__number} Mods und ${builds__number} Builds`)
	
};

const fr_profile_stat_mods_title = /** @type {(inputs: Profile_Stat_Mods_TitleInputs) => LocalizedString} */ (i) => {const mods__plural = registry.plural("fr", i?.mods, {});
	const mods__number = registry.number("fr", i?.mods, {});
	const builds__plural = registry.plural("fr", i?.builds, {});
	const builds__number = registry.number("fr", i?.builds, {});
	if (mods__plural === "one" && builds__plural === "one") return /** @type {LocalizedString} */ (`${mods__number} mod et ${builds__number} build`);
	if (mods__plural === "one") return /** @type {LocalizedString} */ (`${mods__number} mod et ${builds__number} builds`);
	if (builds__plural === "one") return /** @type {LocalizedString} */ (`${mods__number} mods et ${builds__number} build`);
	return /** @type {LocalizedString} */ (`${mods__number} mods et ${builds__number} builds`)
	
};

const it_profile_stat_mods_title = /** @type {(inputs: Profile_Stat_Mods_TitleInputs) => LocalizedString} */ (i) => {const mods__plural = registry.plural("it", i?.mods, {});
	const mods__number = registry.number("it", i?.mods, {});
	const builds__plural = registry.plural("it", i?.builds, {});
	const builds__number = registry.number("it", i?.builds, {});
	if (mods__plural === "one" && builds__plural === "one") return /** @type {LocalizedString} */ (`${mods__number} mod e ${builds__number} build`);
	if (mods__plural === "one") return /** @type {LocalizedString} */ (`${mods__number} mod e ${builds__number} build`);
	if (builds__plural === "one") return /** @type {LocalizedString} */ (`${mods__number} mod e ${builds__number} build`);
	return /** @type {LocalizedString} */ (`${mods__number} mod e ${builds__number} build`)
	
};

const nl_profile_stat_mods_title = /** @type {(inputs: Profile_Stat_Mods_TitleInputs) => LocalizedString} */ (i) => {const mods__plural = registry.plural("nl", i?.mods, {});
	const mods__number = registry.number("nl", i?.mods, {});
	const builds__plural = registry.plural("nl", i?.builds, {});
	const builds__number = registry.number("nl", i?.builds, {});
	if (mods__plural === "one" && builds__plural === "one") return /** @type {LocalizedString} */ (`${mods__number} mod en ${builds__number} build`);
	if (mods__plural === "one") return /** @type {LocalizedString} */ (`${mods__number} mod en ${builds__number} builds`);
	if (builds__plural === "one") return /** @type {LocalizedString} */ (`${mods__number} mods en ${builds__number} build`);
	return /** @type {LocalizedString} */ (`${mods__number} mods en ${builds__number} builds`)
	
};

const pl_profile_stat_mods_title = /** @type {(inputs: Profile_Stat_Mods_TitleInputs) => LocalizedString} */ (i) => {const mods__plural = registry.plural("pl", i?.mods, {});
	const mods__number = registry.number("pl", i?.mods, {});
	const builds__plural = registry.plural("pl", i?.builds, {});
	const builds__number = registry.number("pl", i?.builds, {});
	if (mods__plural === "one" && builds__plural === "one") return /** @type {LocalizedString} */ (`${mods__number} mod i ${builds__number} build`);
	if (mods__plural === "one" && builds__plural === "few") return /** @type {LocalizedString} */ (`${mods__number} mod i ${builds__number} buildy`);
	if (mods__plural === "one" && builds__plural === "many") return /** @type {LocalizedString} */ (`${mods__number} mod i ${builds__number} buildów`);
	if (mods__plural === "one") return /** @type {LocalizedString} */ (`${mods__number} mod i ${builds__number} buildu`);
	if (mods__plural === "few" && builds__plural === "one") return /** @type {LocalizedString} */ (`${mods__number} mody i ${builds__number} build`);
	if (mods__plural === "few" && builds__plural === "few") return /** @type {LocalizedString} */ (`${mods__number} mody i ${builds__number} buildy`);
	if (mods__plural === "few" && builds__plural === "many") return /** @type {LocalizedString} */ (`${mods__number} mody i ${builds__number} buildów`);
	if (mods__plural === "few") return /** @type {LocalizedString} */ (`${mods__number} mody i ${builds__number} buildu`);
	if (mods__plural === "many" && builds__plural === "one") return /** @type {LocalizedString} */ (`${mods__number} modów i ${builds__number} build`);
	if (mods__plural === "many" && builds__plural === "few") return /** @type {LocalizedString} */ (`${mods__number} modów i ${builds__number} buildy`);
	if (mods__plural === "many" && builds__plural === "many") return /** @type {LocalizedString} */ (`${mods__number} modów i ${builds__number} buildów`);
	if (mods__plural === "many") return /** @type {LocalizedString} */ (`${mods__number} modów i ${builds__number} buildu`);
	if (builds__plural === "one") return /** @type {LocalizedString} */ (`${mods__number} modu i ${builds__number} build`);
	if (builds__plural === "few") return /** @type {LocalizedString} */ (`${mods__number} modu i ${builds__number} buildy`);
	if (builds__plural === "many") return /** @type {LocalizedString} */ (`${mods__number} modu i ${builds__number} buildów`);
	return /** @type {LocalizedString} */ (`${mods__number} modu i ${builds__number} buildu`)
	
};

const pt_profile_stat_mods_title = /** @type {(inputs: Profile_Stat_Mods_TitleInputs) => LocalizedString} */ (i) => {const mods__plural = registry.plural("pt", i?.mods, {});
	const mods__number = registry.number("pt", i?.mods, {});
	const builds__plural = registry.plural("pt", i?.builds, {});
	const builds__number = registry.number("pt", i?.builds, {});
	if (mods__plural === "one" && builds__plural === "one") return /** @type {LocalizedString} */ (`${mods__number} mod e ${builds__number} build`);
	if (mods__plural === "one") return /** @type {LocalizedString} */ (`${mods__number} mod e ${builds__number} builds`);
	if (builds__plural === "one") return /** @type {LocalizedString} */ (`${mods__number} mods e ${builds__number} build`);
	return /** @type {LocalizedString} */ (`${mods__number} mods e ${builds__number} builds`)
	
};

const ru_profile_stat_mods_title = /** @type {(inputs: Profile_Stat_Mods_TitleInputs) => LocalizedString} */ (i) => {const mods__plural = registry.plural("ru", i?.mods, {});
	const mods__number = registry.number("ru", i?.mods, {});
	const builds__plural = registry.plural("ru", i?.builds, {});
	const builds__number = registry.number("ru", i?.builds, {});
	if (mods__plural === "one" && builds__plural === "one") return /** @type {LocalizedString} */ (`${mods__number} мод и ${builds__number} постройка`);
	if (mods__plural === "one" && builds__plural === "few") return /** @type {LocalizedString} */ (`${mods__number} мод и ${builds__number} постройки`);
	if (mods__plural === "one" && builds__plural === "many") return /** @type {LocalizedString} */ (`${mods__number} мод и ${builds__number} построек`);
	if (mods__plural === "one") return /** @type {LocalizedString} */ (`${mods__number} мод и ${builds__number} постройки`);
	if (mods__plural === "few" && builds__plural === "one") return /** @type {LocalizedString} */ (`${mods__number} мода и ${builds__number} постройка`);
	if (mods__plural === "few" && builds__plural === "few") return /** @type {LocalizedString} */ (`${mods__number} мода и ${builds__number} постройки`);
	if (mods__plural === "few" && builds__plural === "many") return /** @type {LocalizedString} */ (`${mods__number} мода и ${builds__number} построек`);
	if (mods__plural === "few") return /** @type {LocalizedString} */ (`${mods__number} мода и ${builds__number} постройки`);
	if (mods__plural === "many" && builds__plural === "one") return /** @type {LocalizedString} */ (`${mods__number} модов и ${builds__number} постройка`);
	if (mods__plural === "many" && builds__plural === "few") return /** @type {LocalizedString} */ (`${mods__number} модов и ${builds__number} постройки`);
	if (mods__plural === "many" && builds__plural === "many") return /** @type {LocalizedString} */ (`${mods__number} модов и ${builds__number} построек`);
	if (mods__plural === "many") return /** @type {LocalizedString} */ (`${mods__number} модов и ${builds__number} постройки`);
	if (builds__plural === "one") return /** @type {LocalizedString} */ (`${mods__number} мода и ${builds__number} постройка`);
	if (builds__plural === "few") return /** @type {LocalizedString} */ (`${mods__number} мода и ${builds__number} постройки`);
	if (builds__plural === "many") return /** @type {LocalizedString} */ (`${mods__number} мода и ${builds__number} построек`);
	return /** @type {LocalizedString} */ (`${mods__number} мода и ${builds__number} постройки`)
	
};

const sv_profile_stat_mods_title = /** @type {(inputs: Profile_Stat_Mods_TitleInputs) => LocalizedString} */ (i) => {const mods__plural = registry.plural("sv", i?.mods, {});
	const mods__number = registry.number("sv", i?.mods, {});
	const builds__plural = registry.plural("sv", i?.builds, {});
	const builds__number = registry.number("sv", i?.builds, {});
	if (mods__plural === "one" && builds__plural === "one") return /** @type {LocalizedString} */ (`${mods__number} modd och ${builds__number} bygge`);
	if (mods__plural === "one") return /** @type {LocalizedString} */ (`${mods__number} modd och ${builds__number} byggen`);
	if (builds__plural === "one") return /** @type {LocalizedString} */ (`${mods__number} moddar och ${builds__number} bygge`);
	return /** @type {LocalizedString} */ (`${mods__number} moddar och ${builds__number} byggen`)
	
};

const tr_profile_stat_mods_title = /** @type {(inputs: Profile_Stat_Mods_TitleInputs) => LocalizedString} */ (i) => {const mods__plural = registry.plural("tr", i?.mods, {});
	const mods__number = registry.number("tr", i?.mods, {});
	const builds__plural = registry.plural("tr", i?.builds, {});
	const builds__number = registry.number("tr", i?.builds, {});
	if (mods__plural === "one" && builds__plural === "one") return /** @type {LocalizedString} */ (`${mods__number} mod ve ${builds__number} yapı`);
	if (mods__plural === "one") return /** @type {LocalizedString} */ (`${mods__number} mod ve ${builds__number} yapı`);
	if (builds__plural === "one") return /** @type {LocalizedString} */ (`${mods__number} mod ve ${builds__number} yapı`);
	return /** @type {LocalizedString} */ (`${mods__number} mod ve ${builds__number} yapı`)
	
};

const zh_profile_stat_mods_title = /** @type {(inputs: Profile_Stat_Mods_TitleInputs) => LocalizedString} */ (i) => {
	const mods__plural = registry.plural("zh", i?.mods, {});
	const mods__number = registry.number("zh", i?.mods, {});
	const builds__plural = registry.plural("zh", i?.builds, {});
	const builds__number = registry.number("zh", i?.builds, {});return /** @type {LocalizedString} */ (`${mods__number} 个模组和${builds__number} 个建筑`)
};

const ja_profile_stat_mods_title = /** @type {(inputs: Profile_Stat_Mods_TitleInputs) => LocalizedString} */ (i) => {
	const mods__plural = registry.plural("ja", i?.mods, {});
	const mods__number = registry.number("ja", i?.mods, {});
	const builds__plural = registry.plural("ja", i?.builds, {});
	const builds__number = registry.number("ja", i?.builds, {});return /** @type {LocalizedString} */ (`MOD ${mods__number} 件、建築 ${builds__number} 件`)
};

/**
* | mods__plural | builds__plural | output |
* | --- | --- | --- |
* | "one" | "one" | "{mods__number} mod and {builds__number} build" |
* | "one" | * | "{mods__number} mod and {builds__number} builds" |
* | * | "one" | "{mods__number} mods and {builds__number} build" |
* | * | * | "{mods__number} mods and {builds__number} builds" |
*
* @param {Profile_Stat_Mods_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_stat_mods_title = /** @type {((inputs: Profile_Stat_Mods_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Stat_Mods_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_stat_mods_title(inputs)
	if (locale === "de") return de_profile_stat_mods_title(inputs)
	if (locale === "fr") return fr_profile_stat_mods_title(inputs)
	if (locale === "it") return it_profile_stat_mods_title(inputs)
	if (locale === "nl") return nl_profile_stat_mods_title(inputs)
	if (locale === "pl") return pl_profile_stat_mods_title(inputs)
	if (locale === "pt") return pt_profile_stat_mods_title(inputs)
	if (locale === "ru") return ru_profile_stat_mods_title(inputs)
	if (locale === "sv") return sv_profile_stat_mods_title(inputs)
	if (locale === "tr") return tr_profile_stat_mods_title(inputs)
	if (locale === "zh") return zh_profile_stat_mods_title(inputs)
	if (locale === "ja") return ja_profile_stat_mods_title(inputs)
	return en_profile_stat_mods_title(inputs)
});
