/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Compare_DescriptionInputs */

const en_explore_compare_description = /** @type {(inputs: Explore_Compare_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Put Sons of the Forest mods side by side: downloads, rating, compatibility, multiplayer role, license and dependencies.`)
};

const es_explore_compare_description = /** @type {(inputs: Explore_Compare_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pon mods de Sons of the Forest lado a lado: descargas, valoración, compatibilidad, rol multijugador, licencia y dependencias.`)
};

const de_explore_compare_description = /** @type {(inputs: Explore_Compare_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stelle Sons-of-the-Forest-Mods nebeneinander: Downloads, Bewertung, Kompatibilität, Mehrspielerrolle, Lizenz und Abhängigkeiten.`)
};

const fr_explore_compare_description = /** @type {(inputs: Explore_Compare_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Placez des mods Sons of the Forest côte à côte : téléchargements, note, compatibilité, rôle en multijoueur, licence et dépendances.`)
};

const it_explore_compare_description = /** @type {(inputs: Explore_Compare_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Metti a confronto i mod di Sons of the Forest: download, valutazione, compatibilità, ruolo multiplayer, licenza e dipendenze.`)
};

const nl_explore_compare_description = /** @type {(inputs: Explore_Compare_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zet Sons of the Forest-mods naast elkaar: downloads, beoordeling, compatibiliteit, multiplayerrol, licentie en afhankelijkheden.`)
};

const pl_explore_compare_description = /** @type {(inputs: Explore_Compare_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zestaw mody Sons of the Forest obok siebie: pobrania, ocena, zgodność, rola w multiplayerze, licencja i zależności.`)
};

const pt_explore_compare_description = /** @type {(inputs: Explore_Compare_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Coloque mods de Sons of the Forest lado a lado: downloads, avaliação, compatibilidade, papel no multijogador, licença e dependências.`)
};

const ru_explore_compare_description = /** @type {(inputs: Explore_Compare_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сравните моды Sons of the Forest бок о бок: загрузки, оценка, совместимость, роль в мультиплеере, лицензия и зависимости.`)
};

const sv_explore_compare_description = /** @type {(inputs: Explore_Compare_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ställ Sons of the Forest-mods bredvid varandra: nedladdningar, betyg, kompatibilitet, flerspelarroll, licens och beroenden.`)
};

const tr_explore_compare_description = /** @type {(inputs: Explore_Compare_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sons of the Forest modlarını yan yana koy: indirmeler, puan, uyumluluk, çok oyunculu rolü, lisans ve bağımlılıklar.`)
};

const zh_explore_compare_description = /** @type {(inputs: Explore_Compare_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`将《森林之子》模组并排对比：下载量、评分、兼容性、多人模式角色、许可证和依赖项。`)
};

const ja_explore_compare_description = /** @type {(inputs: Explore_Compare_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sons of the Forest の Mod を並べて比較: ダウンロード数、評価、互換性、マルチプレイでの役割、ライセンス、依存関係。`)
};

/**
* | output |
* | --- |
* | "Put Sons of the Forest mods side by side: downloads, rating, compatibility, multiplayer role, license and dependencies." |
*
* @param {Explore_Compare_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_compare_description = /** @type {((inputs?: Explore_Compare_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Compare_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_compare_description(inputs)
	if (locale === "de") return de_explore_compare_description(inputs)
	if (locale === "fr") return fr_explore_compare_description(inputs)
	if (locale === "it") return it_explore_compare_description(inputs)
	if (locale === "nl") return nl_explore_compare_description(inputs)
	if (locale === "pl") return pl_explore_compare_description(inputs)
	if (locale === "pt") return pt_explore_compare_description(inputs)
	if (locale === "ru") return ru_explore_compare_description(inputs)
	if (locale === "sv") return sv_explore_compare_description(inputs)
	if (locale === "tr") return tr_explore_compare_description(inputs)
	if (locale === "zh") return zh_explore_compare_description(inputs)
	if (locale === "ja") return ja_explore_compare_description(inputs)
	return en_explore_compare_description(inputs)
});
