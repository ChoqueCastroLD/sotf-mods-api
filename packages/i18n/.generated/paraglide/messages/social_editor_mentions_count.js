/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Social_Editor_Mentions_CountInputs */

const en_social_editor_mentions_count = /** @type {(inputs: Social_Editor_Mentions_CountInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("en", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`No suggestions`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} suggestion, use the arrow keys`);
	return /** @type {LocalizedString} */ (`${count__number} suggestions, use the arrow keys`)
	
};

const es_social_editor_mentions_count = /** @type {(inputs: Social_Editor_Mentions_CountInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("es", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Sin sugerencias`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} sugerencia, usa las flechas`);
	return /** @type {LocalizedString} */ (`${count__number} sugerencias, usa las flechas`)
	
};

const de_social_editor_mentions_count = /** @type {(inputs: Social_Editor_Mentions_CountInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("de", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Keine Vorschläge`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} Vorschlag, Pfeiltasten verwenden`);
	return /** @type {LocalizedString} */ (`${count__number} Vorschläge, Pfeiltasten verwenden`)
	
};

const fr_social_editor_mentions_count = /** @type {(inputs: Social_Editor_Mentions_CountInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("fr", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Aucune suggestion`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} suggestion, utilisez les flèches`);
	return /** @type {LocalizedString} */ (`${count__number} suggestions, utilisez les flèches`)
	
};

const it_social_editor_mentions_count = /** @type {(inputs: Social_Editor_Mentions_CountInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("it", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Nessun suggerimento`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} suggerimento, usa le frecce`);
	return /** @type {LocalizedString} */ (`${count__number} suggerimenti, usa le frecce`)
	
};

const nl_social_editor_mentions_count = /** @type {(inputs: Social_Editor_Mentions_CountInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("nl", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Geen suggesties`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} suggestie, gebruik de pijltjestoetsen`);
	return /** @type {LocalizedString} */ (`${count__number} suggesties, gebruik de pijltjestoetsen`)
	
};

const pl_social_editor_mentions_count = /** @type {(inputs: Social_Editor_Mentions_CountInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("pl", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Brak podpowiedzi`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} podpowiedź, użyj strzałek`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} podpowiedzi, użyj strzałek`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} podpowiedzi, użyj strzałek`);
	return /** @type {LocalizedString} */ (`${count__number} podpowiedzi, użyj strzałek`)
	
};

const pt_social_editor_mentions_count = /** @type {(inputs: Social_Editor_Mentions_CountInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("pt", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Sem sugestões`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} sugestão, use as setas`);
	return /** @type {LocalizedString} */ (`${count__number} sugestões, use as setas`)
	
};

const ru_social_editor_mentions_count = /** @type {(inputs: Social_Editor_Mentions_CountInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("ru", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Нет подсказок`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} подсказка, используйте стрелки`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} подсказки, используйте стрелки`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} подсказок, используйте стрелки`);
	return /** @type {LocalizedString} */ (`${count__number} подсказки, используйте стрелки`)
	
};

const sv_social_editor_mentions_count = /** @type {(inputs: Social_Editor_Mentions_CountInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("sv", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Inga förslag`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} förslag, använd piltangenterna`);
	return /** @type {LocalizedString} */ (`${count__number} förslag, använd piltangenterna`)
	
};

const tr_social_editor_mentions_count = /** @type {(inputs: Social_Editor_Mentions_CountInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("tr", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Öneri yok`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} öneri, ok tuşlarını kullan`);
	return /** @type {LocalizedString} */ (`${count__number} öneri, ok tuşlarını kullan`)
	
};

const zh_social_editor_mentions_count = /** @type {(inputs: Social_Editor_Mentions_CountInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("zh", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`没有建议`);
	return /** @type {LocalizedString} */ (`${count__number} 条建议，使用方向键选择`)
	
};

const ja_social_editor_mentions_count = /** @type {(inputs: Social_Editor_Mentions_CountInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("ja", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`候補はありません`);
	return /** @type {LocalizedString} */ (`候補 ${count__number} 件、矢印キーで選択`)
	
};

/**
* | count__exact | count__plural | output |
* | --- | --- | --- |
* | "0" | * | "No suggestions" |
* | * | "one" | "{count__number} suggestion, use the arrow keys" |
* | * | * | "{count__number} suggestions, use the arrow keys" |
*
* @param {Social_Editor_Mentions_CountInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_editor_mentions_count = /** @type {((inputs: Social_Editor_Mentions_CountInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Editor_Mentions_CountInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_editor_mentions_count(inputs)
	if (locale === "de") return de_social_editor_mentions_count(inputs)
	if (locale === "fr") return fr_social_editor_mentions_count(inputs)
	if (locale === "it") return it_social_editor_mentions_count(inputs)
	if (locale === "nl") return nl_social_editor_mentions_count(inputs)
	if (locale === "pl") return pl_social_editor_mentions_count(inputs)
	if (locale === "pt") return pt_social_editor_mentions_count(inputs)
	if (locale === "ru") return ru_social_editor_mentions_count(inputs)
	if (locale === "sv") return sv_social_editor_mentions_count(inputs)
	if (locale === "tr") return tr_social_editor_mentions_count(inputs)
	if (locale === "zh") return zh_social_editor_mentions_count(inputs)
	if (locale === "ja") return ja_social_editor_mentions_count(inputs)
	return en_social_editor_mentions_count(inputs)
});
