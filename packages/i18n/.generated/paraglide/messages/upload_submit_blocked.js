/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Upload_Submit_BlockedInputs */

const en_upload_submit_blocked = /** @type {(inputs: Upload_Submit_BlockedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} error left to fix.`);
	return /** @type {LocalizedString} */ (`${count__number} errors left to fix.`)
	
};

const es_upload_submit_blocked = /** @type {(inputs: Upload_Submit_BlockedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Queda ${count__number} error por corregir.`);
	return /** @type {LocalizedString} */ (`Quedan ${count__number} errores por corregir.`)
	
};

const de_upload_submit_blocked = /** @type {(inputs: Upload_Submit_BlockedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Noch ${count__number} Fehler zu beheben.`);
	return /** @type {LocalizedString} */ (`Noch ${count__number} Fehler zu beheben.`)
	
};

const fr_upload_submit_blocked = /** @type {(inputs: Upload_Submit_BlockedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Encore ${count__number} erreur à corriger.`);
	return /** @type {LocalizedString} */ (`Encore ${count__number} erreurs à corriger.`)
	
};

const it_upload_submit_blocked = /** @type {(inputs: Upload_Submit_BlockedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Resta ${count__number} errore da correggere.`);
	return /** @type {LocalizedString} */ (`Restano ${count__number} errori da correggere.`)
	
};

const nl_upload_submit_blocked = /** @type {(inputs: Upload_Submit_BlockedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Nog ${count__number} fout om op te lossen.`);
	return /** @type {LocalizedString} */ (`Nog ${count__number} fouten om op te lossen.`)
	
};

const pl_upload_submit_blocked = /** @type {(inputs: Upload_Submit_BlockedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Został ${count__number} błąd do poprawienia.`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Zostały ${count__number} błędy do poprawienia.`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Zostało ${count__number} błędów do poprawienia.`);
	return /** @type {LocalizedString} */ (`Zostało ${count__number} błędu do poprawienia.`)
	
};

const pt_upload_submit_blocked = /** @type {(inputs: Upload_Submit_BlockedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Falta corrigir ${count__number} erro.`);
	return /** @type {LocalizedString} */ (`Faltam corrigir ${count__number} erros.`)
	
};

const ru_upload_submit_blocked = /** @type {(inputs: Upload_Submit_BlockedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Осталась ${count__number} ошибка.`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Осталось ${count__number} ошибки.`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Осталось ${count__number} ошибок.`);
	return /** @type {LocalizedString} */ (`Осталось ${count__number} ошибки.`)
	
};

const sv_upload_submit_blocked = /** @type {(inputs: Upload_Submit_BlockedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} fel kvar att rätta.`);
	return /** @type {LocalizedString} */ (`${count__number} fel kvar att rätta.`)
	
};

const tr_upload_submit_blocked = /** @type {(inputs: Upload_Submit_BlockedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Düzeltilecek ${count__number} hata kaldı.`);
	return /** @type {LocalizedString} */ (`Düzeltilecek ${count__number} hata kaldı.`)
	
};

const zh_upload_submit_blocked = /** @type {(inputs: Upload_Submit_BlockedInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`还有 ${count__number} 个错误需要修正。`)
};

const ja_upload_submit_blocked = /** @type {(inputs: Upload_Submit_BlockedInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`修正が必要なエラーが ${count__number} 件あります。`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} error left to fix." |
* | * | "{count__number} errors left to fix." |
*
* @param {Upload_Submit_BlockedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_submit_blocked = /** @type {((inputs: Upload_Submit_BlockedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Submit_BlockedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_submit_blocked(inputs)
	if (locale === "de") return de_upload_submit_blocked(inputs)
	if (locale === "fr") return fr_upload_submit_blocked(inputs)
	if (locale === "it") return it_upload_submit_blocked(inputs)
	if (locale === "nl") return nl_upload_submit_blocked(inputs)
	if (locale === "pl") return pl_upload_submit_blocked(inputs)
	if (locale === "pt") return pt_upload_submit_blocked(inputs)
	if (locale === "ru") return ru_upload_submit_blocked(inputs)
	if (locale === "sv") return sv_upload_submit_blocked(inputs)
	if (locale === "tr") return tr_upload_submit_blocked(inputs)
	if (locale === "zh") return zh_upload_submit_blocked(inputs)
	if (locale === "ja") return ja_upload_submit_blocked(inputs)
	return en_upload_submit_blocked(inputs)
});
