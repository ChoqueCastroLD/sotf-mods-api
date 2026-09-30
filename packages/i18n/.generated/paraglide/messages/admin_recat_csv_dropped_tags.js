/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Admin_Recat_Csv_Dropped_TagsInputs */

const en_admin_recat_csv_dropped_tags = /** @type {(inputs: Admin_Recat_Csv_Dropped_TagsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} unknown tag was dropped.`);
	return /** @type {LocalizedString} */ (`${count__number} unknown tags were dropped.`)
	
};

const es_admin_recat_csv_dropped_tags = /** @type {(inputs: Admin_Recat_Csv_Dropped_TagsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Se descartó ${count__number} etiqueta desconocida.`);
	return /** @type {LocalizedString} */ (`Se descartaron ${count__number} etiquetas desconocidas.`)
	
};

const de_admin_recat_csv_dropped_tags = /** @type {(inputs: Admin_Recat_Csv_Dropped_TagsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} unbekannter Tag wurde verworfen.`);
	return /** @type {LocalizedString} */ (`${count__number} unbekannte Tags wurden verworfen.`)
	
};

const fr_admin_recat_csv_dropped_tags = /** @type {(inputs: Admin_Recat_Csv_Dropped_TagsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} tag inconnu a été ignoré.`);
	return /** @type {LocalizedString} */ (`${count__number} tags inconnus ont été ignorés.`)
	
};

const it_admin_recat_csv_dropped_tags = /** @type {(inputs: Admin_Recat_Csv_Dropped_TagsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} tag sconosciuto è stato scartato.`);
	return /** @type {LocalizedString} */ (`${count__number} tag sconosciuti sono stati scartati.`)
	
};

const nl_admin_recat_csv_dropped_tags = /** @type {(inputs: Admin_Recat_Csv_Dropped_TagsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} onbekende tag is weggelaten.`);
	return /** @type {LocalizedString} */ (`${count__number} onbekende tags zijn weggelaten.`)
	
};

const pl_admin_recat_csv_dropped_tags = /** @type {(inputs: Admin_Recat_Csv_Dropped_TagsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Pominięto ${count__number} nieznany tag.`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Pominięto ${count__number} nieznane tagi.`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Pominięto ${count__number} nieznanych tagów.`);
	return /** @type {LocalizedString} */ (`Pominięto ${count__number} nieznanego tagu.`)
	
};

const pt_admin_recat_csv_dropped_tags = /** @type {(inputs: Admin_Recat_Csv_Dropped_TagsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} tag desconhecida foi descartada.`);
	return /** @type {LocalizedString} */ (`${count__number} tags desconhecidas foram descartadas.`)
	
};

const ru_admin_recat_csv_dropped_tags = /** @type {(inputs: Admin_Recat_Csv_Dropped_TagsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Отброшен ${count__number} неизвестный тег.`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Отброшено ${count__number} неизвестных тега.`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Отброшено ${count__number} неизвестных тегов.`);
	return /** @type {LocalizedString} */ (`Отброшено ${count__number} неизвестного тега.`)
	
};

const sv_admin_recat_csv_dropped_tags = /** @type {(inputs: Admin_Recat_Csv_Dropped_TagsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} okänd tagg ignorerades.`);
	return /** @type {LocalizedString} */ (`${count__number} okända taggar ignorerades.`)
	
};

const tr_admin_recat_csv_dropped_tags = /** @type {(inputs: Admin_Recat_Csv_Dropped_TagsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} bilinmeyen etiket atıldı.`);
	return /** @type {LocalizedString} */ (`${count__number} bilinmeyen etiket atıldı.`)
	
};

const zh_admin_recat_csv_dropped_tags = /** @type {(inputs: Admin_Recat_Csv_Dropped_TagsInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`已丢弃 ${count__number} 个未知标签。`)
};

const ja_admin_recat_csv_dropped_tags = /** @type {(inputs: Admin_Recat_Csv_Dropped_TagsInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`不明なタグ ${count__number} 個を除外しました。`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} unknown tag was dropped." |
* | * | "{count__number} unknown tags were dropped." |
*
* @param {Admin_Recat_Csv_Dropped_TagsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_recat_csv_dropped_tags = /** @type {((inputs: Admin_Recat_Csv_Dropped_TagsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Recat_Csv_Dropped_TagsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_recat_csv_dropped_tags(inputs)
	if (locale === "de") return de_admin_recat_csv_dropped_tags(inputs)
	if (locale === "fr") return fr_admin_recat_csv_dropped_tags(inputs)
	if (locale === "it") return it_admin_recat_csv_dropped_tags(inputs)
	if (locale === "nl") return nl_admin_recat_csv_dropped_tags(inputs)
	if (locale === "pl") return pl_admin_recat_csv_dropped_tags(inputs)
	if (locale === "pt") return pt_admin_recat_csv_dropped_tags(inputs)
	if (locale === "ru") return ru_admin_recat_csv_dropped_tags(inputs)
	if (locale === "sv") return sv_admin_recat_csv_dropped_tags(inputs)
	if (locale === "tr") return tr_admin_recat_csv_dropped_tags(inputs)
	if (locale === "zh") return zh_admin_recat_csv_dropped_tags(inputs)
	if (locale === "ja") return ja_admin_recat_csv_dropped_tags(inputs)
	return en_admin_recat_csv_dropped_tags(inputs)
});
