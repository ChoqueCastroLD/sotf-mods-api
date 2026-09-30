/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Kits_Autos_TitleInputs */

const en_kits_autos_title = /** @type {(inputs: Kits_Autos_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} dependency added automatically`);
	return /** @type {LocalizedString} */ (`${count__number} dependencies added automatically`)
	
};

const es_kits_autos_title = /** @type {(inputs: Kits_Autos_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} dependencia añadida automáticamente`);
	return /** @type {LocalizedString} */ (`${count__number} dependencias añadidas automáticamente`)
	
};

const de_kits_autos_title = /** @type {(inputs: Kits_Autos_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} Abhängigkeit automatisch hinzugefügt`);
	return /** @type {LocalizedString} */ (`${count__number} Abhängigkeiten automatisch hinzugefügt`)
	
};

const fr_kits_autos_title = /** @type {(inputs: Kits_Autos_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} dépendance ajoutée automatiquement`);
	return /** @type {LocalizedString} */ (`${count__number} dépendances ajoutées automatiquement`)
	
};

const it_kits_autos_title = /** @type {(inputs: Kits_Autos_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} dipendenza aggiunta automaticamente`);
	return /** @type {LocalizedString} */ (`${count__number} dipendenze aggiunte automaticamente`)
	
};

const nl_kits_autos_title = /** @type {(inputs: Kits_Autos_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} afhankelijkheid automatisch toegevoegd`);
	return /** @type {LocalizedString} */ (`${count__number} afhankelijkheden automatisch toegevoegd`)
	
};

const pl_kits_autos_title = /** @type {(inputs: Kits_Autos_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} zależność dodana automatycznie`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} zależności dodane automatycznie`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} zależności dodanych automatycznie`);
	return /** @type {LocalizedString} */ (`${count__number} zależności dodanej automatycznie`)
	
};

const pt_kits_autos_title = /** @type {(inputs: Kits_Autos_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} dependência adicionada automaticamente`);
	return /** @type {LocalizedString} */ (`${count__number} dependências adicionadas automaticamente`)
	
};

const ru_kits_autos_title = /** @type {(inputs: Kits_Autos_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} зависимость добавлена автоматически`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} зависимости добавлены автоматически`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} зависимостей добавлено автоматически`);
	return /** @type {LocalizedString} */ (`${count__number} зависимости добавлено автоматически`)
	
};

const sv_kits_autos_title = /** @type {(inputs: Kits_Autos_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} beroende tillagt automatiskt`);
	return /** @type {LocalizedString} */ (`${count__number} beroenden tillagda automatiskt`)
	
};

const tr_kits_autos_title = /** @type {(inputs: Kits_Autos_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} bağımlılık otomatik eklendi`);
	return /** @type {LocalizedString} */ (`${count__number} bağımlılık otomatik eklendi`)
	
};

const zh_kits_autos_title = /** @type {(inputs: Kits_Autos_TitleInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`自动添加了 ${count__number} 个依赖`)
};

const ja_kits_autos_title = /** @type {(inputs: Kits_Autos_TitleInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`依存 MOD を ${count__number} 件自動追加`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} dependency added automatically" |
* | * | "{count__number} dependencies added automatically" |
*
* @param {Kits_Autos_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_autos_title = /** @type {((inputs: Kits_Autos_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Autos_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_autos_title(inputs)
	if (locale === "de") return de_kits_autos_title(inputs)
	if (locale === "fr") return fr_kits_autos_title(inputs)
	if (locale === "it") return it_kits_autos_title(inputs)
	if (locale === "nl") return nl_kits_autos_title(inputs)
	if (locale === "pl") return pl_kits_autos_title(inputs)
	if (locale === "pt") return pt_kits_autos_title(inputs)
	if (locale === "ru") return ru_kits_autos_title(inputs)
	if (locale === "sv") return sv_kits_autos_title(inputs)
	if (locale === "tr") return tr_kits_autos_title(inputs)
	if (locale === "zh") return zh_kits_autos_title(inputs)
	if (locale === "ja") return ja_kits_autos_title(inputs)
	return en_kits_autos_title(inputs)
});
