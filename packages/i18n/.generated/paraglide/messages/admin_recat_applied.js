/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Admin_Recat_AppliedInputs */

const en_admin_recat_applied = /** @type {(inputs: Admin_Recat_AppliedInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("en", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Nothing needed changing`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod recategorized`);
	return /** @type {LocalizedString} */ (`${count__number} mods recategorized`)
	
};

const es_admin_recat_applied = /** @type {(inputs: Admin_Recat_AppliedInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("es", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`No hacía falta cambiar nada`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod recategorizado`);
	return /** @type {LocalizedString} */ (`${count__number} mods recategorizados`)
	
};

const de_admin_recat_applied = /** @type {(inputs: Admin_Recat_AppliedInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("de", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Nichts musste geändert werden`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} Mod umkategorisiert`);
	return /** @type {LocalizedString} */ (`${count__number} Mods umkategorisiert`)
	
};

const fr_admin_recat_applied = /** @type {(inputs: Admin_Recat_AppliedInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("fr", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Rien à changer`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod recatégorisé`);
	return /** @type {LocalizedString} */ (`${count__number} mods recatégorisés`)
	
};

const it_admin_recat_applied = /** @type {(inputs: Admin_Recat_AppliedInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("it", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Non c’era niente da cambiare`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod ricategorizzata`);
	return /** @type {LocalizedString} */ (`${count__number} mod ricategorizzate`)
	
};

const nl_admin_recat_applied = /** @type {(inputs: Admin_Recat_AppliedInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("nl", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Er hoefde niets te veranderen`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod heringedeeld`);
	return /** @type {LocalizedString} */ (`${count__number} mods heringedeeld`)
	
};

const pl_admin_recat_applied = /** @type {(inputs: Admin_Recat_AppliedInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("pl", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Nic nie trzeba było zmieniać`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Przeniesiono ${count__number} mod`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Przeniesiono ${count__number} mody`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Przeniesiono ${count__number} modów`);
	return /** @type {LocalizedString} */ (`Przeniesiono ${count__number} modu`)
	
};

const pt_admin_recat_applied = /** @type {(inputs: Admin_Recat_AppliedInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("pt", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Nada precisava mudar`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod recategorizado`);
	return /** @type {LocalizedString} */ (`${count__number} mods recategorizados`)
	
};

const ru_admin_recat_applied = /** @type {(inputs: Admin_Recat_AppliedInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("ru", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Менять ничего не пришлось`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Перенесён ${count__number} мод`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Перенесено ${count__number} мода`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Перенесено ${count__number} модов`);
	return /** @type {LocalizedString} */ (`Перенесено ${count__number} мода`)
	
};

const sv_admin_recat_applied = /** @type {(inputs: Admin_Recat_AppliedInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("sv", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Inget behövde ändras`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} modd omkategoriserad`);
	return /** @type {LocalizedString} */ (`${count__number} moddar omkategoriserade`)
	
};

const tr_admin_recat_applied = /** @type {(inputs: Admin_Recat_AppliedInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("tr", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Değişmesi gereken bir şey yoktu`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod yeniden kategorilendirildi`);
	return /** @type {LocalizedString} */ (`${count__number} mod yeniden kategorilendirildi`)
	
};

const zh_admin_recat_applied = /** @type {(inputs: Admin_Recat_AppliedInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("zh", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`没有需要更改的内容`);
	return /** @type {LocalizedString} */ (`已重新分类 ${count__number} 个模组`)
	
};

const ja_admin_recat_applied = /** @type {(inputs: Admin_Recat_AppliedInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("ja", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`変更の必要はありませんでした`);
	return /** @type {LocalizedString} */ (`${count__number} 件の MOD を再分類しました`)
	
};

/**
* | count__exact | count__plural | output |
* | --- | --- | --- |
* | "0" | * | "Nothing needed changing" |
* | * | "one" | "{count__number} mod recategorized" |
* | * | * | "{count__number} mods recategorized" |
*
* @param {Admin_Recat_AppliedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_recat_applied = /** @type {((inputs: Admin_Recat_AppliedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Recat_AppliedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_recat_applied(inputs)
	if (locale === "de") return de_admin_recat_applied(inputs)
	if (locale === "fr") return fr_admin_recat_applied(inputs)
	if (locale === "it") return it_admin_recat_applied(inputs)
	if (locale === "nl") return nl_admin_recat_applied(inputs)
	if (locale === "pl") return pl_admin_recat_applied(inputs)
	if (locale === "pt") return pt_admin_recat_applied(inputs)
	if (locale === "ru") return ru_admin_recat_applied(inputs)
	if (locale === "sv") return sv_admin_recat_applied(inputs)
	if (locale === "tr") return tr_admin_recat_applied(inputs)
	if (locale === "zh") return zh_admin_recat_applied(inputs)
	if (locale === "ja") return ja_admin_recat_applied(inputs)
	return en_admin_recat_applied(inputs)
});
