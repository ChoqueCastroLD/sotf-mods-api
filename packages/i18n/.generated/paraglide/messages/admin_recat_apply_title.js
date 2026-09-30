/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Admin_Recat_Apply_TitleInputs */

const en_admin_recat_apply_title = /** @type {(inputs: Admin_Recat_Apply_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Apply ${count__number} change?`);
	return /** @type {LocalizedString} */ (`Apply ${count__number} changes?`)
	
};

const es_admin_recat_apply_title = /** @type {(inputs: Admin_Recat_Apply_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`¿Aplicar ${count__number} cambio?`);
	return /** @type {LocalizedString} */ (`¿Aplicar ${count__number} cambios?`)
	
};

const de_admin_recat_apply_title = /** @type {(inputs: Admin_Recat_Apply_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} Änderung anwenden?`);
	return /** @type {LocalizedString} */ (`${count__number} Änderungen anwenden?`)
	
};

const fr_admin_recat_apply_title = /** @type {(inputs: Admin_Recat_Apply_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Appliquer ${count__number} changement ?`);
	return /** @type {LocalizedString} */ (`Appliquer ${count__number} changements ?`)
	
};

const it_admin_recat_apply_title = /** @type {(inputs: Admin_Recat_Apply_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Applicare ${count__number} modifica?`);
	return /** @type {LocalizedString} */ (`Applicare ${count__number} modifiche?`)
	
};

const nl_admin_recat_apply_title = /** @type {(inputs: Admin_Recat_Apply_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} wijziging toepassen?`);
	return /** @type {LocalizedString} */ (`${count__number} wijzigingen toepassen?`)
	
};

const pl_admin_recat_apply_title = /** @type {(inputs: Admin_Recat_Apply_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Zastosować ${count__number} zmianę?`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Zastosować ${count__number} zmiany?`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Zastosować ${count__number} zmian?`);
	return /** @type {LocalizedString} */ (`Zastosować ${count__number} zmiany?`)
	
};

const pt_admin_recat_apply_title = /** @type {(inputs: Admin_Recat_Apply_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Aplicar ${count__number} alteração?`);
	return /** @type {LocalizedString} */ (`Aplicar ${count__number} alterações?`)
	
};

const ru_admin_recat_apply_title = /** @type {(inputs: Admin_Recat_Apply_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Применить ${count__number} изменение?`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Применить ${count__number} изменения?`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Применить ${count__number} изменений?`);
	return /** @type {LocalizedString} */ (`Применить ${count__number} изменения?`)
	
};

const sv_admin_recat_apply_title = /** @type {(inputs: Admin_Recat_Apply_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Tillämpa ${count__number} ändring?`);
	return /** @type {LocalizedString} */ (`Tillämpa ${count__number} ändringar?`)
	
};

const tr_admin_recat_apply_title = /** @type {(inputs: Admin_Recat_Apply_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} değişiklik uygulansın mı?`);
	return /** @type {LocalizedString} */ (`${count__number} değişiklik uygulansın mı?`)
	
};

const zh_admin_recat_apply_title = /** @type {(inputs: Admin_Recat_Apply_TitleInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`应用 ${count__number} 项更改？`)
};

const ja_admin_recat_apply_title = /** @type {(inputs: Admin_Recat_Apply_TitleInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 件の変更を適用しますか？`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "Apply {count__number} change?" |
* | * | "Apply {count__number} changes?" |
*
* @param {Admin_Recat_Apply_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_recat_apply_title = /** @type {((inputs: Admin_Recat_Apply_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Recat_Apply_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_recat_apply_title(inputs)
	if (locale === "de") return de_admin_recat_apply_title(inputs)
	if (locale === "fr") return fr_admin_recat_apply_title(inputs)
	if (locale === "it") return it_admin_recat_apply_title(inputs)
	if (locale === "nl") return nl_admin_recat_apply_title(inputs)
	if (locale === "pl") return pl_admin_recat_apply_title(inputs)
	if (locale === "pt") return pt_admin_recat_apply_title(inputs)
	if (locale === "ru") return ru_admin_recat_apply_title(inputs)
	if (locale === "sv") return sv_admin_recat_apply_title(inputs)
	if (locale === "tr") return tr_admin_recat_apply_title(inputs)
	if (locale === "zh") return zh_admin_recat_apply_title(inputs)
	if (locale === "ja") return ja_admin_recat_apply_title(inputs)
	return en_admin_recat_apply_title(inputs)
});
