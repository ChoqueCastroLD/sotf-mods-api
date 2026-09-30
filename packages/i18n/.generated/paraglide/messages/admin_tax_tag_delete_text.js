/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Admin_Tax_Tag_Delete_TextInputs */

const en_admin_tax_tag_delete_text = /** @type {(inputs: Admin_Tax_Tag_Delete_TextInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("en", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`No mod uses it.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`It will be removed from ${count__number} mod.`);
	return /** @type {LocalizedString} */ (`It will be removed from ${count__number} mods.`)
	
};

const es_admin_tax_tag_delete_text = /** @type {(inputs: Admin_Tax_Tag_Delete_TextInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("es", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Ningún mod la usa.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Se quitará de ${count__number} mod.`);
	return /** @type {LocalizedString} */ (`Se quitará de ${count__number} mods.`)
	
};

const de_admin_tax_tag_delete_text = /** @type {(inputs: Admin_Tax_Tag_Delete_TextInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("de", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Kein Mod nutzt ihn.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Er wird von ${count__number} Mod entfernt.`);
	return /** @type {LocalizedString} */ (`Er wird von ${count__number} Mods entfernt.`)
	
};

const fr_admin_tax_tag_delete_text = /** @type {(inputs: Admin_Tax_Tag_Delete_TextInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("fr", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Aucun mod ne l’utilise.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Il sera retiré de ${count__number} mod.`);
	return /** @type {LocalizedString} */ (`Il sera retiré de ${count__number} mods.`)
	
};

const it_admin_tax_tag_delete_text = /** @type {(inputs: Admin_Tax_Tag_Delete_TextInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("it", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Nessuna mod lo usa.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Verrà rimosso da ${count__number} mod.`);
	return /** @type {LocalizedString} */ (`Verrà rimosso da ${count__number} mod.`)
	
};

const nl_admin_tax_tag_delete_text = /** @type {(inputs: Admin_Tax_Tag_Delete_TextInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("nl", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Geen enkele mod gebruikt hem.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Hij wordt van ${count__number} mod verwijderd.`);
	return /** @type {LocalizedString} */ (`Hij wordt van ${count__number} mods verwijderd.`)
	
};

const pl_admin_tax_tag_delete_text = /** @type {(inputs: Admin_Tax_Tag_Delete_TextInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("pl", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Nie używa go żaden mod.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Zostanie usunięty z ${count__number} modu.`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Zostanie usunięty z ${count__number} modów.`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Zostanie usunięty z ${count__number} modów.`);
	return /** @type {LocalizedString} */ (`Zostanie usunięty z ${count__number} modu.`)
	
};

const pt_admin_tax_tag_delete_text = /** @type {(inputs: Admin_Tax_Tag_Delete_TextInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("pt", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Nenhum mod a usa.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Ela será removida de ${count__number} mod.`);
	return /** @type {LocalizedString} */ (`Ela será removida de ${count__number} mods.`)
	
};

const ru_admin_tax_tag_delete_text = /** @type {(inputs: Admin_Tax_Tag_Delete_TextInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("ru", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Его не использует ни один мод.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Он будет снят с ${count__number} мода.`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Он будет снят с ${count__number} модов.`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Он будет снят с ${count__number} модов.`);
	return /** @type {LocalizedString} */ (`Он будет снят с ${count__number} мода.`)
	
};

const sv_admin_tax_tag_delete_text = /** @type {(inputs: Admin_Tax_Tag_Delete_TextInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("sv", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Ingen modd använder den.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Den tas bort från ${count__number} modd.`);
	return /** @type {LocalizedString} */ (`Den tas bort från ${count__number} moddar.`)
	
};

const tr_admin_tax_tag_delete_text = /** @type {(inputs: Admin_Tax_Tag_Delete_TextInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("tr", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Hiçbir mod bunu kullanmıyor.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} moddan kaldırılacak.`);
	return /** @type {LocalizedString} */ (`${count__number} moddan kaldırılacak.`)
	
};

const zh_admin_tax_tag_delete_text = /** @type {(inputs: Admin_Tax_Tag_Delete_TextInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("zh", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`没有模组使用它。`);
	return /** @type {LocalizedString} */ (`将从 ${count__number} 个模组上移除。`)
	
};

const ja_admin_tax_tag_delete_text = /** @type {(inputs: Admin_Tax_Tag_Delete_TextInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("ja", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`使っている MOD はありません。`);
	return /** @type {LocalizedString} */ (`${count__number} 件の MOD から外されます。`)
	
};

/**
* | count__exact | count__plural | output |
* | --- | --- | --- |
* | "0" | * | "No mod uses it." |
* | * | "one" | "It will be removed from {count__number} mod." |
* | * | * | "It will be removed from {count__number} mods." |
*
* @param {Admin_Tax_Tag_Delete_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_tax_tag_delete_text = /** @type {((inputs: Admin_Tax_Tag_Delete_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Tax_Tag_Delete_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_tax_tag_delete_text(inputs)
	if (locale === "de") return de_admin_tax_tag_delete_text(inputs)
	if (locale === "fr") return fr_admin_tax_tag_delete_text(inputs)
	if (locale === "it") return it_admin_tax_tag_delete_text(inputs)
	if (locale === "nl") return nl_admin_tax_tag_delete_text(inputs)
	if (locale === "pl") return pl_admin_tax_tag_delete_text(inputs)
	if (locale === "pt") return pt_admin_tax_tag_delete_text(inputs)
	if (locale === "ru") return ru_admin_tax_tag_delete_text(inputs)
	if (locale === "sv") return sv_admin_tax_tag_delete_text(inputs)
	if (locale === "tr") return tr_admin_tax_tag_delete_text(inputs)
	if (locale === "zh") return zh_admin_tax_tag_delete_text(inputs)
	if (locale === "ja") return ja_admin_tax_tag_delete_text(inputs)
	return en_admin_tax_tag_delete_text(inputs)
});
