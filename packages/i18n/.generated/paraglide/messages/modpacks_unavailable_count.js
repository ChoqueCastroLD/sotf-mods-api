/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Modpacks_Unavailable_CountInputs */

const en_modpacks_unavailable_count = /** @type {(inputs: Modpacks_Unavailable_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod is no longer available and is skipped by the download.`);
	return /** @type {LocalizedString} */ (`${count__number} mods are no longer available and are skipped by the download.`)
	
};

const es_modpacks_unavailable_count = /** @type {(inputs: Modpacks_Unavailable_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod ya no está disponible y la descarga lo omite.`);
	return /** @type {LocalizedString} */ (`${count__number} mods ya no están disponibles y la descarga los omite.`)
	
};

const de_modpacks_unavailable_count = /** @type {(inputs: Modpacks_Unavailable_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} Mod ist nicht mehr verfügbar und wird beim Download übersprungen.`);
	return /** @type {LocalizedString} */ (`${count__number} Mods sind nicht mehr verfügbar und werden beim Download übersprungen.`)
	
};

const fr_modpacks_unavailable_count = /** @type {(inputs: Modpacks_Unavailable_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod n’est plus disponible et est ignoré au téléchargement.`);
	return /** @type {LocalizedString} */ (`${count__number} mods ne sont plus disponibles et sont ignorés au téléchargement.`)
	
};

const it_modpacks_unavailable_count = /** @type {(inputs: Modpacks_Unavailable_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod non è più disponibile e viene saltata nel download.`);
	return /** @type {LocalizedString} */ (`${count__number} mod non sono più disponibili e vengono saltate nel download.`)
	
};

const nl_modpacks_unavailable_count = /** @type {(inputs: Modpacks_Unavailable_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod is niet meer beschikbaar en wordt overgeslagen bij het downloaden.`);
	return /** @type {LocalizedString} */ (`${count__number} mods zijn niet meer beschikbaar en worden overgeslagen bij het downloaden.`)
	
};

const pl_modpacks_unavailable_count = /** @type {(inputs: Modpacks_Unavailable_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod nie jest już dostępny i zostanie pominięty przy pobieraniu.`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} mody nie są już dostępne i zostaną pominięte przy pobieraniu.`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} modów nie jest już dostępnych i zostaną pominięte przy pobieraniu.`);
	return /** @type {LocalizedString} */ (`${count__number} modu nie jest już dostępne i zostaną pominięte przy pobieraniu.`)
	
};

const pt_modpacks_unavailable_count = /** @type {(inputs: Modpacks_Unavailable_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod não está mais disponível e é ignorado no download.`);
	return /** @type {LocalizedString} */ (`${count__number} mods não estão mais disponíveis e são ignorados no download.`)
	
};

const ru_modpacks_unavailable_count = /** @type {(inputs: Modpacks_Unavailable_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} мод больше недоступен и пропускается при скачивании.`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} мода больше недоступны и пропускаются при скачивании.`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} модов больше недоступны и пропускаются при скачивании.`);
	return /** @type {LocalizedString} */ (`${count__number} мода больше недоступны и пропускаются при скачивании.`)
	
};

const sv_modpacks_unavailable_count = /** @type {(inputs: Modpacks_Unavailable_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} modd är inte längre tillgänglig och hoppas över vid nedladdning.`);
	return /** @type {LocalizedString} */ (`${count__number} moddar är inte längre tillgängliga och hoppas över vid nedladdning.`)
	
};

const tr_modpacks_unavailable_count = /** @type {(inputs: Modpacks_Unavailable_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod artık mevcut değil ve indirmede atlanıyor.`);
	return /** @type {LocalizedString} */ (`${count__number} mod artık mevcut değil ve indirmede atlanıyor.`)
	
};

const zh_modpacks_unavailable_count = /** @type {(inputs: Modpacks_Unavailable_CountInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 个模组已不可用，下载时会跳过。`)
};

const ja_modpacks_unavailable_count = /** @type {(inputs: Modpacks_Unavailable_CountInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 個の Mod は利用できなくなったため、ダウンロード時にスキップされます。`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} mod is no longer available and is skipped by the download." |
* | * | "{count__number} mods are no longer available and are skipped by the download." |
*
* @param {Modpacks_Unavailable_CountInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_unavailable_count = /** @type {((inputs: Modpacks_Unavailable_CountInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Unavailable_CountInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_unavailable_count(inputs)
	if (locale === "de") return de_modpacks_unavailable_count(inputs)
	if (locale === "fr") return fr_modpacks_unavailable_count(inputs)
	if (locale === "it") return it_modpacks_unavailable_count(inputs)
	if (locale === "nl") return nl_modpacks_unavailable_count(inputs)
	if (locale === "pl") return pl_modpacks_unavailable_count(inputs)
	if (locale === "pt") return pt_modpacks_unavailable_count(inputs)
	if (locale === "ru") return ru_modpacks_unavailable_count(inputs)
	if (locale === "sv") return sv_modpacks_unavailable_count(inputs)
	if (locale === "tr") return tr_modpacks_unavailable_count(inputs)
	if (locale === "zh") return zh_modpacks_unavailable_count(inputs)
	if (locale === "ja") return ja_modpacks_unavailable_count(inputs)
	return en_modpacks_unavailable_count(inputs)
});
