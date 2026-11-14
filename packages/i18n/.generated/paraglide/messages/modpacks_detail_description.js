/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown>, author: NonNullable<unknown>, count: NonNullable<unknown> }} Modpacks_Detail_DescriptionInputs */

const en_modpacks_detail_description = /** @type {(inputs: Modpacks_Detail_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} by ${i?.author}: ${count__number} mod for Sons of the Forest. Download it and install everything with SotF Mods Manager.`);
	return /** @type {LocalizedString} */ (`${i?.name} by ${i?.author}: ${count__number} mods for Sons of the Forest. Download it and install everything with SotF Mods Manager.`)
	
};

const es_modpacks_detail_description = /** @type {(inputs: Modpacks_Detail_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} de ${i?.author}: ${count__number} mod para Sons of the Forest. Descárgalo e instala todo con SotF Mods Manager.`);
	return /** @type {LocalizedString} */ (`${i?.name} de ${i?.author}: ${count__number} mods para Sons of the Forest. Descárgalo e instala todo con SotF Mods Manager.`)
	
};

const de_modpacks_detail_description = /** @type {(inputs: Modpacks_Detail_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} von ${i?.author}: ${count__number} Mod für Sons of the Forest. Herunterladen und alles mit SotF Mods Manager installieren.`);
	return /** @type {LocalizedString} */ (`${i?.name} von ${i?.author}: ${count__number} Mods für Sons of the Forest. Herunterladen und alles mit SotF Mods Manager installieren.`)
	
};

const fr_modpacks_detail_description = /** @type {(inputs: Modpacks_Detail_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} par ${i?.author} : ${count__number} mod pour Sons of the Forest. Téléchargez-le et installez tout avec SotF Mods Manager.`);
	return /** @type {LocalizedString} */ (`${i?.name} par ${i?.author} : ${count__number} mods pour Sons of the Forest. Téléchargez-le et installez tout avec SotF Mods Manager.`)
	
};

const it_modpacks_detail_description = /** @type {(inputs: Modpacks_Detail_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} di ${i?.author}: ${count__number} mod per Sons of the Forest. Scaricalo e installa tutto con SotF Mods Manager.`);
	return /** @type {LocalizedString} */ (`${i?.name} di ${i?.author}: ${count__number} mod per Sons of the Forest. Scaricalo e installa tutto con SotF Mods Manager.`)
	
};

const nl_modpacks_detail_description = /** @type {(inputs: Modpacks_Detail_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} door ${i?.author}: ${count__number} mod voor Sons of the Forest. Download het en installeer alles met SotF Mods Manager.`);
	return /** @type {LocalizedString} */ (`${i?.name} door ${i?.author}: ${count__number} mods voor Sons of the Forest. Download het en installeer alles met SotF Mods Manager.`)
	
};

const pl_modpacks_detail_description = /** @type {(inputs: Modpacks_Detail_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} (autor: ${i?.author}): ${count__number} mod do Sons of the Forest. Pobierz i zainstaluj wszystko w SotF Mods Manager.`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${i?.name} (autor: ${i?.author}): ${count__number} mody do Sons of the Forest. Pobierz i zainstaluj wszystko w SotF Mods Manager.`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${i?.name} (autor: ${i?.author}): ${count__number} modów do Sons of the Forest. Pobierz i zainstaluj wszystko w SotF Mods Manager.`);
	return /** @type {LocalizedString} */ (`${i?.name} (autor: ${i?.author}): ${count__number} modu do Sons of the Forest. Pobierz i zainstaluj wszystko w SotF Mods Manager.`)
	
};

const pt_modpacks_detail_description = /** @type {(inputs: Modpacks_Detail_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} por ${i?.author}: ${count__number} mod para Sons of the Forest. Baixe e instale tudo com o SotF Mods Manager.`);
	return /** @type {LocalizedString} */ (`${i?.name} por ${i?.author}: ${count__number} mods para Sons of the Forest. Baixe e instale tudo com o SotF Mods Manager.`)
	
};

const ru_modpacks_detail_description = /** @type {(inputs: Modpacks_Detail_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} (автор: ${i?.author}): ${count__number} мод для Sons of the Forest. Скачайте и установите всё через SotF Mods Manager.`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${i?.name} (автор: ${i?.author}): ${count__number} мода для Sons of the Forest. Скачайте и установите всё через SotF Mods Manager.`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${i?.name} (автор: ${i?.author}): ${count__number} модов для Sons of the Forest. Скачайте и установите всё через SotF Mods Manager.`);
	return /** @type {LocalizedString} */ (`${i?.name} (автор: ${i?.author}): ${count__number} мода для Sons of the Forest. Скачайте и установите всё через SotF Mods Manager.`)
	
};

const sv_modpacks_detail_description = /** @type {(inputs: Modpacks_Detail_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} av ${i?.author}: ${count__number} modd för Sons of the Forest. Ladda ner och installera allt med SotF Mods Manager.`);
	return /** @type {LocalizedString} */ (`${i?.name} av ${i?.author}: ${count__number} moddar för Sons of the Forest. Ladda ner och installera allt med SotF Mods Manager.`)
	
};

const tr_modpacks_detail_description = /** @type {(inputs: Modpacks_Detail_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.author} tarafından ${i?.name}: Sons of the Forest için ${count__number} mod. İndir ve hepsini SotF Mods Manager ile kur.`);
	return /** @type {LocalizedString} */ (`${i?.author} tarafından ${i?.name}: Sons of the Forest için ${count__number} mod. İndir ve hepsini SotF Mods Manager ile kur.`)
	
};

const zh_modpacks_detail_description = /** @type {(inputs: Modpacks_Detail_DescriptionInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`${i?.author} 制作的 ${i?.name}：包含 ${count__number} 个模组，适用于《森林之子》。下载后用 SotF Mods Manager 一键安装。`)
};

const ja_modpacks_detail_description = /** @type {(inputs: Modpacks_Detail_DescriptionInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`${i?.author} の ${i?.name}: Sons of the Forest 用の ${count__number} 個の Mod。ダウンロードして SotF Mods Manager でまとめてインストールできます。`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{name} by {author}: {count__number} mod for Sons of the Forest. Download it and install everything with SotF Mods Manager." |
* | * | "{name} by {author}: {count__number} mods for Sons of the Forest. Download it and install everything with SotF Mods Manager." |
*
* @param {Modpacks_Detail_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_detail_description = /** @type {((inputs: Modpacks_Detail_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Detail_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_detail_description(inputs)
	if (locale === "de") return de_modpacks_detail_description(inputs)
	if (locale === "fr") return fr_modpacks_detail_description(inputs)
	if (locale === "it") return it_modpacks_detail_description(inputs)
	if (locale === "nl") return nl_modpacks_detail_description(inputs)
	if (locale === "pl") return pl_modpacks_detail_description(inputs)
	if (locale === "pt") return pt_modpacks_detail_description(inputs)
	if (locale === "ru") return ru_modpacks_detail_description(inputs)
	if (locale === "sv") return sv_modpacks_detail_description(inputs)
	if (locale === "tr") return tr_modpacks_detail_description(inputs)
	if (locale === "zh") return zh_modpacks_detail_description(inputs)
	if (locale === "ja") return ja_modpacks_detail_description(inputs)
	return en_modpacks_detail_description(inputs)
});
