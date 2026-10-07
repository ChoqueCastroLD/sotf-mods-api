/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Upload_Preflight_Show_PassedInputs */

const en_upload_preflight_show_passed = /** @type {(inputs: Upload_Preflight_Show_PassedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Show ${count__number} passed check`);
	return /** @type {LocalizedString} */ (`Show ${count__number} passed checks`)
	
};

const es_upload_preflight_show_passed = /** @type {(inputs: Upload_Preflight_Show_PassedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Mostrar ${count__number} comprobación superada`);
	return /** @type {LocalizedString} */ (`Mostrar ${count__number} comprobaciones superadas`)
	
};

const de_upload_preflight_show_passed = /** @type {(inputs: Upload_Preflight_Show_PassedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} bestandene Prüfung anzeigen`);
	return /** @type {LocalizedString} */ (`${count__number} bestandene Prüfungen anzeigen`)
	
};

const fr_upload_preflight_show_passed = /** @type {(inputs: Upload_Preflight_Show_PassedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Afficher ${count__number} contrôle réussi`);
	return /** @type {LocalizedString} */ (`Afficher ${count__number} contrôles réussis`)
	
};

const it_upload_preflight_show_passed = /** @type {(inputs: Upload_Preflight_Show_PassedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Mostra ${count__number} controllo superato`);
	return /** @type {LocalizedString} */ (`Mostra ${count__number} controlli superati`)
	
};

const nl_upload_preflight_show_passed = /** @type {(inputs: Upload_Preflight_Show_PassedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} geslaagde controle tonen`);
	return /** @type {LocalizedString} */ (`${count__number} geslaagde controles tonen`)
	
};

const pl_upload_preflight_show_passed = /** @type {(inputs: Upload_Preflight_Show_PassedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Pokaż ${count__number} zaliczone sprawdzenie`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Pokaż ${count__number} zaliczone sprawdzenia`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Pokaż ${count__number} zaliczonych sprawdzeń`);
	return /** @type {LocalizedString} */ (`Pokaż ${count__number} zaliczonych sprawdzeń`)
	
};

const pt_upload_preflight_show_passed = /** @type {(inputs: Upload_Preflight_Show_PassedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Mostrar ${count__number} verificação aprovada`);
	return /** @type {LocalizedString} */ (`Mostrar ${count__number} verificações aprovadas`)
	
};

const ru_upload_preflight_show_passed = /** @type {(inputs: Upload_Preflight_Show_PassedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Показать ${count__number} пройденную проверку`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Показать ${count__number} пройденные проверки`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Показать ${count__number} пройденных проверок`);
	return /** @type {LocalizedString} */ (`Показать ${count__number} пройденной проверки`)
	
};

const sv_upload_preflight_show_passed = /** @type {(inputs: Upload_Preflight_Show_PassedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Visa ${count__number} godkänd kontroll`);
	return /** @type {LocalizedString} */ (`Visa ${count__number} godkända kontroller`)
	
};

const tr_upload_preflight_show_passed = /** @type {(inputs: Upload_Preflight_Show_PassedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Geçen ${count__number} kontrolü göster`);
	return /** @type {LocalizedString} */ (`Geçen ${count__number} kontrolü göster`)
	
};

const zh_upload_preflight_show_passed = /** @type {(inputs: Upload_Preflight_Show_PassedInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`显示 ${count__number} 项已通过的检查`)
};

const ja_upload_preflight_show_passed = /** @type {(inputs: Upload_Preflight_Show_PassedInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`合格した${count__number}件のチェックを表示`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "Show {count__number} passed check" |
* | * | "Show {count__number} passed checks" |
*
* @param {Upload_Preflight_Show_PassedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_preflight_show_passed = /** @type {((inputs: Upload_Preflight_Show_PassedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Preflight_Show_PassedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_preflight_show_passed(inputs)
	if (locale === "de") return de_upload_preflight_show_passed(inputs)
	if (locale === "fr") return fr_upload_preflight_show_passed(inputs)
	if (locale === "it") return it_upload_preflight_show_passed(inputs)
	if (locale === "nl") return nl_upload_preflight_show_passed(inputs)
	if (locale === "pl") return pl_upload_preflight_show_passed(inputs)
	if (locale === "pt") return pt_upload_preflight_show_passed(inputs)
	if (locale === "ru") return ru_upload_preflight_show_passed(inputs)
	if (locale === "sv") return sv_upload_preflight_show_passed(inputs)
	if (locale === "tr") return tr_upload_preflight_show_passed(inputs)
	if (locale === "zh") return zh_upload_preflight_show_passed(inputs)
	if (locale === "ja") return ja_upload_preflight_show_passed(inputs)
	return en_upload_preflight_show_passed(inputs)
});
