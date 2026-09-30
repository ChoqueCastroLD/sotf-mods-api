/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Explore_Meta_Builds_DescriptionInputs */

const en_explore_meta_builds_description = /** @type {(inputs: Explore_Meta_Builds_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} BuildShare blueprint for Sons of the Forest: bases, forts and treehouses shared by the community, ready to place.`);
	return /** @type {LocalizedString} */ (`${count__number} BuildShare blueprints for Sons of the Forest: bases, forts and treehouses shared by the community, ready to place.`)
	
};

const es_explore_meta_builds_description = /** @type {(inputs: Explore_Meta_Builds_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} plano de BuildShare para Sons of the Forest: bases, fuertes y casas en el árbol compartidos por la comunidad, listos para colocar.`);
	return /** @type {LocalizedString} */ (`${count__number} planos de BuildShare para Sons of the Forest: bases, fuertes y casas en el árbol compartidos por la comunidad, listos para colocar.`)
	
};

const de_explore_meta_builds_description = /** @type {(inputs: Explore_Meta_Builds_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} BuildShare-Bauplan für Sons of the Forest: Basen, Festungen und Baumhäuser aus der Community, bereit zum Platzieren.`);
	return /** @type {LocalizedString} */ (`${count__number} BuildShare-Baupläne für Sons of the Forest: Basen, Festungen und Baumhäuser aus der Community, bereit zum Platzieren.`)
	
};

const fr_explore_meta_builds_description = /** @type {(inputs: Explore_Meta_Builds_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} plan BuildShare pour Sons of the Forest : bases, forts et cabanes partagés par la communauté, prêts à poser.`);
	return /** @type {LocalizedString} */ (`${count__number} plans BuildShare pour Sons of the Forest : bases, forts et cabanes partagés par la communauté, prêts à poser.`)
	
};

const it_explore_meta_builds_description = /** @type {(inputs: Explore_Meta_Builds_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} progetto BuildShare per Sons of the Forest: basi, forti e case sull’albero condivisi dalla community, pronti da piazzare.`);
	return /** @type {LocalizedString} */ (`${count__number} progetti BuildShare per Sons of the Forest: basi, forti e case sull’albero condivisi dalla community, pronti da piazzare.`)
	
};

const nl_explore_meta_builds_description = /** @type {(inputs: Explore_Meta_Builds_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} BuildShare-bouwtekening voor Sons of the Forest: bases, forten en boomhutten uit de community, klaar om te plaatsen.`);
	return /** @type {LocalizedString} */ (`${count__number} BuildShare-bouwtekeningen voor Sons of the Forest: bases, forten en boomhutten uit de community, klaar om te plaatsen.`)
	
};

const pl_explore_meta_builds_description = /** @type {(inputs: Explore_Meta_Builds_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} plan BuildShare do Sons of the Forest: bazy, forty i domki na drzewie od społeczności, gotowe do postawienia.`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} plany BuildShare do Sons of the Forest: bazy, forty i domki na drzewie od społeczności, gotowe do postawienia.`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} planów BuildShare do Sons of the Forest: bazy, forty i domki na drzewie od społeczności, gotowe do postawienia.`);
	return /** @type {LocalizedString} */ (`${count__number} planu BuildShare do Sons of the Forest: bazy, forty i domki na drzewie od społeczności, gotowe do postawienia.`)
	
};

const pt_explore_meta_builds_description = /** @type {(inputs: Explore_Meta_Builds_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} planta do BuildShare para Sons of the Forest: bases, fortes e casas na árvore da comunidade, prontas para posicionar.`);
	return /** @type {LocalizedString} */ (`${count__number} plantas do BuildShare para Sons of the Forest: bases, fortes e casas na árvore da comunidade, prontas para posicionar.`)
	
};

const ru_explore_meta_builds_description = /** @type {(inputs: Explore_Meta_Builds_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} чертёж BuildShare для Sons of the Forest: базы, форты и домики на деревьях от сообщества, готовые к установке.`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} чертежа BuildShare для Sons of the Forest: базы, форты и домики на деревьях от сообщества, готовые к установке.`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} чертежей BuildShare для Sons of the Forest: базы, форты и домики на деревьях от сообщества, готовые к установке.`);
	return /** @type {LocalizedString} */ (`${count__number} чертежа BuildShare для Sons of the Forest: базы, форты и домики на деревьях от сообщества, готовые к установке.`)
	
};

const sv_explore_meta_builds_description = /** @type {(inputs: Explore_Meta_Builds_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} BuildShare-ritning till Sons of the Forest: baser, fort och trädkojor från communityn, redo att placeras.`);
	return /** @type {LocalizedString} */ (`${count__number} BuildShare-ritningar till Sons of the Forest: baser, fort och trädkojor från communityn, redo att placeras.`)
	
};

const tr_explore_meta_builds_description = /** @type {(inputs: Explore_Meta_Builds_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Sons of the Forest için ${count__number} BuildShare planı: topluluğun paylaştığı üsler, kaleler ve ağaç evler, yerleştirmeye hazır.`);
	return /** @type {LocalizedString} */ (`Sons of the Forest için ${count__number} BuildShare planı: topluluğun paylaştığı üsler, kaleler ve ağaç evler, yerleştirmeye hazır.`)
	
};

const zh_explore_meta_builds_description = /** @type {(inputs: Explore_Meta_Builds_DescriptionInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 份Sons of the Forest 的 BuildShare 蓝图：社区分享的基地、堡垒和树屋，可直接放置。`)
};

const ja_explore_meta_builds_description = /** @type {(inputs: Explore_Meta_Builds_DescriptionInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`Sons of the Forest 向け BuildShare 設計図 ${count__number} 件。コミュニティが共有した拠点、砦、ツリーハウスをすぐに配置できます。`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} BuildShare blueprint for Sons of the Forest: bases, forts and treehouses shared by the community, ready to place." |
* | * | "{count__number} BuildShare blueprints for Sons of the Forest: bases, forts and treehouses shared by the community, ready to place." |
*
* @param {Explore_Meta_Builds_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_meta_builds_description = /** @type {((inputs: Explore_Meta_Builds_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Meta_Builds_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_meta_builds_description(inputs)
	if (locale === "de") return de_explore_meta_builds_description(inputs)
	if (locale === "fr") return fr_explore_meta_builds_description(inputs)
	if (locale === "it") return it_explore_meta_builds_description(inputs)
	if (locale === "nl") return nl_explore_meta_builds_description(inputs)
	if (locale === "pl") return pl_explore_meta_builds_description(inputs)
	if (locale === "pt") return pt_explore_meta_builds_description(inputs)
	if (locale === "ru") return ru_explore_meta_builds_description(inputs)
	if (locale === "sv") return sv_explore_meta_builds_description(inputs)
	if (locale === "tr") return tr_explore_meta_builds_description(inputs)
	if (locale === "zh") return zh_explore_meta_builds_description(inputs)
	if (locale === "ja") return ja_explore_meta_builds_description(inputs)
	return en_explore_meta_builds_description(inputs)
});
