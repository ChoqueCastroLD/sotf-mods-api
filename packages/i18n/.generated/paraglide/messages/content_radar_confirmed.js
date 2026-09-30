/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ share: NonNullable<unknown>, count: NonNullable<unknown>, build: NonNullable<unknown> }} Content_Radar_ConfirmedInputs */

const en_content_radar_confirmed = /** @type {(inputs: Content_Radar_ConfirmedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.share} of the top ${count__number} mod confirmed on ${i?.build}`);
	return /** @type {LocalizedString} */ (`${i?.share} of the top ${count__number} mods confirmed on ${i?.build}`)
	
};

const es_content_radar_confirmed = /** @type {(inputs: Content_Radar_ConfirmedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.share} de el mod principal confirmado en ${i?.build}`);
	return /** @type {LocalizedString} */ (`${i?.share} de los ${count__number} mods principales confirmado en ${i?.build}`)
	
};

const de_content_radar_confirmed = /** @type {(inputs: Content_Radar_ConfirmedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.share} der Top-Mod auf ${i?.build} bestätigt`);
	return /** @type {LocalizedString} */ (`${i?.share} der Top-${count__number} Mods auf ${i?.build} bestätigt`)
	
};

const fr_content_radar_confirmed = /** @type {(inputs: Content_Radar_ConfirmedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.share} du mod principal confirmé sur ${i?.build}`);
	return /** @type {LocalizedString} */ (`${i?.share} des ${count__number} mods principaux confirmés sur ${i?.build}`)
	
};

const it_content_radar_confirmed = /** @type {(inputs: Content_Radar_ConfirmedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.share} della mod principale confermata su ${i?.build}`);
	return /** @type {LocalizedString} */ (`${i?.share} delle ${count__number} mod principali confermate su ${i?.build}`)
	
};

const nl_content_radar_confirmed = /** @type {(inputs: Content_Radar_ConfirmedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.share} van de topmod bevestigd op ${i?.build}`);
	return /** @type {LocalizedString} */ (`${i?.share} van de top ${count__number} mods bevestigd op ${i?.build}`)
	
};

const pl_content_radar_confirmed = /** @type {(inputs: Content_Radar_ConfirmedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.share} czołowego moda potwierdzone na ${i?.build}`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${i?.share} z ${count__number} czołowych modów potwierdzone na ${i?.build}`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${i?.share} z ${count__number} czołowych modów potwierdzone na ${i?.build}`);
	return /** @type {LocalizedString} */ (`${i?.share} z ${count__number} czołowych modów potwierdzone na ${i?.build}`)
	
};

const pt_content_radar_confirmed = /** @type {(inputs: Content_Radar_ConfirmedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.share} do mod principal confirmado na ${i?.build}`);
	return /** @type {LocalizedString} */ (`${i?.share} dos ${count__number} mods principais confirmados na ${i?.build}`)
	
};

const ru_content_radar_confirmed = /** @type {(inputs: Content_Radar_ConfirmedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Подтверждено ${i?.share} из ${count__number} топ-мода на ${i?.build}`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Подтверждено ${i?.share} из ${count__number} топ-модов на ${i?.build}`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Подтверждено ${i?.share} из ${count__number} топ-модов на ${i?.build}`);
	return /** @type {LocalizedString} */ (`Подтверждено ${i?.share} из ${count__number} топ-мода на ${i?.build}`)
	
};

const sv_content_radar_confirmed = /** @type {(inputs: Content_Radar_ConfirmedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.share} av toppmodden bekräftade på ${i?.build}`);
	return /** @type {LocalizedString} */ (`${i?.share} av de ${count__number} toppmoddarna bekräftade på ${i?.build}`)
	
};

const tr_content_radar_confirmed = /** @type {(inputs: Content_Radar_ConfirmedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.build} sürümünde en iyi modun ${i?.share} kadarı doğrulandı`);
	return /** @type {LocalizedString} */ (`${i?.build} sürümünde en iyi ${count__number} modun ${i?.share} kadarı doğrulandı`)
	
};

const zh_content_radar_confirmed = /** @type {(inputs: Content_Radar_ConfirmedInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`${i?.build} 上前 ${count__number} 个模组中已确认 ${i?.share}`)
};

const ja_content_radar_confirmed = /** @type {(inputs: Content_Radar_ConfirmedInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`${i?.build} で上位 ${count__number} 件の Mod のうち ${i?.share} を確認済み`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{share} of the top {count__number} mod confirmed on {build}" |
* | * | "{share} of the top {count__number} mods confirmed on {build}" |
*
* @param {Content_Radar_ConfirmedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_radar_confirmed = /** @type {((inputs: Content_Radar_ConfirmedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Radar_ConfirmedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_radar_confirmed(inputs)
	if (locale === "de") return de_content_radar_confirmed(inputs)
	if (locale === "fr") return fr_content_radar_confirmed(inputs)
	if (locale === "it") return it_content_radar_confirmed(inputs)
	if (locale === "nl") return nl_content_radar_confirmed(inputs)
	if (locale === "pl") return pl_content_radar_confirmed(inputs)
	if (locale === "pt") return pt_content_radar_confirmed(inputs)
	if (locale === "ru") return ru_content_radar_confirmed(inputs)
	if (locale === "sv") return sv_content_radar_confirmed(inputs)
	if (locale === "tr") return tr_content_radar_confirmed(inputs)
	if (locale === "zh") return zh_content_radar_confirmed(inputs)
	if (locale === "ja") return ja_content_radar_confirmed(inputs)
	return en_content_radar_confirmed(inputs)
});
